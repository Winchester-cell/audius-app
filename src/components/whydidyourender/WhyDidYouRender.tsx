"use client";
import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";

if (process.env.NODE_ENV === "development") {
    // console log appears only once
    whyDidYouRender(React, { trackAllPureComponents: true });
}

export default function DebugRender() {
    return null;
}
