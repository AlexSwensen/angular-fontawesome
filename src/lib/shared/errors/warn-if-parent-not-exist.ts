/**
 * Warns if parent component not existing.
 */
export const faWarnIfParentNotExist = (parent: any, parentName: string, childName: string) => {
  if (!parent) {
    throw new Error(`FontAwesome: ${childName} should be used as child of ${parentName} only.`);
  }
};
