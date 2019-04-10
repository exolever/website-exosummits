interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.svg' {
  const fileName: string;
  export = fileName;
}

declare module '*.png' {
  const fileName: string;
  export = fileName;
}


declare module '*.jpg' {
  const fileName: string;
  export = fileName;
}

