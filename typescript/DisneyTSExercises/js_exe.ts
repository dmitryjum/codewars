console.clear();

type ParsedHLS = Partial<{
  version: number;
  resolution: {
    width: number;
    height: number;
  };
}>;

const parse = (hls: string): ParsedHLS => {
  const tags: string[] = hls.split('\n');
  const result: ParsedHLS = {}
  for (let i = 0; i < tags.length; i++) {
    const tagType: string[] = tags[i].split(':')
    if (tagType[0] === "#EXT-X-VERSION") {
      result.version = parseInt(tagType[1])
    } else {
      const resolutionString: string = tagType[1].split('=')[1]
      result.resolution = {
        width: parseInt(resolutionString.split('x')[0]),
        height: parseInt(resolutionString.split('x')[1])
      }
    }
  }
  // console.log(result);
  return result;
};

const parsed = parse(
  `#EXT-X-VERSION:99
#EXT-X-STREAM-INF:RESOLUTION=1920x800`
);









// --------------------- Do not edit below --------------------- //

/*
Task:
  Create a simple HLS parser.

Input:
  #EXT-X-VERSION:99
  #EXT-X-STREAM-INF:RESOLUTION=1920x800

Output:
  {
    version: 99,
    resolution: {
      width: 1920,
      height: 800,
    }
  }

Notes:
  - Split on \n
  - To simplify, assume that no additional tags or attributes are available
*/

const received = JSON.stringify(parsed, null, 2);
const expected = JSON.stringify({ version: 99, resolution: { width: 1920, height: 800 } }, null, 2);

console.log(`\nPass: ${received === expected}\n\nReceived: ${received}\n\nExpected: ${expected}\n`);
