## 安装
``` shell
npm install @xmzhou/rc-terminal
```

## 只读终端-示例
<code src="@/demo-readonly/index.tsx"></code>

## 交互终端-示例
<code src="@/demo/index.tsx"></code>

## API
``` typescript
export interface RC_TERMINAL_REF extends Terminal {
    fitAddon: FitAddon,
    webLinksAddon: WebLinksAddon,
}

export interface RC_TERMINAL {
  /**
   * 自定义样式
   */
  className?: string;
  /**
   * 内容是否只读
   */
  readonly?: boolean;
  /**
   * 初始化配置
   */
  initOptions?: ITerminalOptions & ITerminalInitOnlyOptions
  /**
   * ref对象，返回terminal对象
   */
  ref?: React.MutableRefObject<RC_TERMINAL_REF>;
  /**
   * 输入模式下的前缀，`readonly=false`时有效
   */
  inputPrefix?: string;
  /**
   * 输入模式输入内容，按回车键触发，`readonly=false`时有效
   */
  onPressEnter?: (str: string) => void;
}
```