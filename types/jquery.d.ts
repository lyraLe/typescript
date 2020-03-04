declare function jQuery(params:string): HTMLElement;
declare namespace jQuery {
  function ajax(url: string, setting: any): void;
}
export default jQuery;