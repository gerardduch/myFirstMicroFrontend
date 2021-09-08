import React from "react";

const a = [1, 2, 3, 4];
const func = (v) => <span> toto {v}</span>;

export default () => <div>Sending love from Sub A {a.map(func)}</div>;
