import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { IDisposable, Terminal } from "xterm";
import { RC_TERMINAL, RC_TERMINAL_REF } from "./props";
import { FitAddon } from "xterm-addon-fit";
import { WebLinksAddon } from "xterm-addon-web-links";
import { useSize, useUpdateEffect } from 'ahooks';

export default ({
    initOptions, inputPrefix, readonly, onPressEnter = () => { },
}: RC_TERMINAL, ref?: React.ForwardedRef<RC_TERMINAL_REF>) => {
    const continerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef('');
    const [terminal, setTerminal] = useState<RC_TERMINAL_REF>();
    const dataListenerRef = useRef<IDisposable>();
    const continerSize = useSize(continerRef);
    const handleDispose = () => {
        if (terminal?.fitAddon) {
            terminal.fitAddon.dispose();
        }
        if (terminal?.webLinksAddon) {
            terminal.webLinksAddon.dispose();
        }
        if (terminal) {
            terminal.dispose();
        }
    }
    const handleInput = (terminal: RC_TERMINAL_REF) => {
        inputRef.current = '';
        const prefix = inputPrefix || '';
        if (!readonly) {
            terminal?.write(prefix);
        }
        let len = 0;
        prefix?.split('').forEach((c) => {
            if (c.charCodeAt(0) < 128) {
                len += 1;
            } else {
                len += 2;
            }
        })
        if (dataListenerRef.current) {
            dataListenerRef.current.dispose();
            dataListenerRef.current = undefined;
        }
        dataListenerRef.current = terminal.onData(async (e: string) => {
            if (!terminal || readonly) {
                return;
            }
            switch (e) {
                case '\u0003': // Ctrl+C
                    terminal.writeln('^C');
                    terminal.write(prefix);
                    break;
                case '\r': // Enter
                    await onPressEnter(inputRef.current)
                    terminal.writeln('');
                    terminal.write(prefix);
                    inputRef.current = '';
                    break;
                case '\u007F': // Backspace (DEL)
                    if ((terminal as any)._core.buffer.x > len) {
                        terminal.write('\b \b');
                        if (inputRef.current.length > 0) {
                            inputRef.current = inputRef.current.substr(0, inputRef.current.length - 1);
                        }
                    }
                    break;
                default: // Print all other characters for demo
                    if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {
                        inputRef.current += e;
                        terminal.write(e);
                    }
            }
        });
    }
    const handleInit = async () => {
        const container = continerRef.current;
        if (!container) {
            return;
        }
        handleDispose();
        const newTerminal = new Terminal(initOptions) as RC_TERMINAL_REF;
        const fitAddon = new FitAddon();
        const webLinksAddon = new WebLinksAddon();
        newTerminal.fitAddon = fitAddon;
        newTerminal.webLinksAddon = webLinksAddon;
        newTerminal.loadAddon(fitAddon);
        newTerminal.loadAddon(webLinksAddon);
        newTerminal.open(container);
        fitAddon.fit();
        setTerminal(newTerminal);
        handleInput(newTerminal);
    }

    useEffect(() => {
        handleInit();
        return handleDispose;
    }, []);
    useUpdateEffect(() => {
        if (terminal) {
            terminal.writeln('');
        }
        handleInit();
    }, [inputPrefix, readonly]);
    useEffect(() => {
        if (terminal?.fitAddon) {
            terminal.fitAddon.fit();
        }
    }, [continerSize])
    useImperativeHandle(ref, () => {
        return terminal as any;
    }, [terminal]);
    return {
        continerRef,
    };
}