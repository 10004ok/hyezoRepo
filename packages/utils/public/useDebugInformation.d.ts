declare function useDebugInformation(componentName: string, props: Record<string, any>): {
    count: number;
    changedProps: {};
    timeSinceLastRender: string;
};

export { useDebugInformation as default };
