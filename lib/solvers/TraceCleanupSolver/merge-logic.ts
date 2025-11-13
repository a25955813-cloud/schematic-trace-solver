export const isClose = (a: number, b: number, tolerance = 0.001) => Math.abs(a - b) < tolerance;

export const mergeTraces = (t1: any, t2: any) => {
  if (t1.net_id !== t2.net_id) return null;
  
  // دمج الخطوط المتوازية والمتقاربة (Horizontal & Vertical)
  const xMatch = isClose(t1.x1, t2.x1) && isClose(t1.x2, t2.x2);
  const yMatch = isClose(t1.y1, t2.y1) && isClose(t1.y2, t2.y2);
  
  if (xMatch || yMatch) {
    return {
      ...t1,
      x1: Math.min(t1.x1, t1.x2, t2.x1, t2.x2),
      x2: Math.max(t1.x1, t1.x2, t2.x1, t2.x2),
      y1: Math.min(t1.y1, t1.y2, t2.y1, t2.y2),
      y2: Math.max(t1.y1, t1.y2, t2.y1, t2.y2),
    };
  }
  return null;
};
