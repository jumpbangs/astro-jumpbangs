declare module 'aos' {
  const AOS: {
    // eslint-disable-next-line unused-imports/no-unused-vars
    init: (options?: {
      offset?: number;
      duration?: number;
      easing?: string;
      delay?: number;
      once?: boolean;
      anchorPlacement?: string;
    }) => void;
  };
  export default AOS;
}
