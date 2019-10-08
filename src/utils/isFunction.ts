export default function(obj: any) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}
