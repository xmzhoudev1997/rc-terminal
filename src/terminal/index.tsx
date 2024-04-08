import React, { forwardRef } from 'react';
import classNames from 'classnames';
import useData from './hook';
import { RC_TERMINAL, RC_TERMINAL_REF } from './props';
import './index.less';
import 'xterm/css/xterm.css';

const Index = forwardRef<RC_TERMINAL_REF, RC_TERMINAL>((props, ref) => {
    const {
      continerRef,
    } = useData(props, ref);
    return (
      <div className={classNames('rc-terminal', props.readonly ? 'rc-terminal-readonly' : '', props.className)} ref={continerRef} />
    );
  });

export default Index;
