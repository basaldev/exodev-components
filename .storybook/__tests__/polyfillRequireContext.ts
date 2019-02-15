import glob from 'glob';
import path from 'path';

export default function polyfillRequireContext(nodeReq: any, basepath: string) {
  nodeReq.context = (
    directory: string,
    useSubdirectories: boolean = false,
    regExp: RegExp = /^\.\//,
  ) => {
    const req = (file: string) => nodeReq(file);
    const dir = path.resolve(basepath, directory);
    const pattern = useSubdirectories ? '**' : '*';
    req.keys = () =>
      glob
        .sync(`${dir}/${pattern}`)
        .filter((file: string) => regExp.test(file));
    return req;
  };
}
