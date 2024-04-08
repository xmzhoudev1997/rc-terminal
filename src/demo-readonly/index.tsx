// @ts-nocheck
import React, { type FC } from 'react';
import { RcTerminal } from '@xmzhou/rc-terminal';
import './index.less';


const Foo: FC = () => {
    return <RcTerminal
        className="demo-terminal"
        readonly
    />;
};

export default Foo;
