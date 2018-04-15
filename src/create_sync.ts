'use strict';

export function create_sync(extensions, last: { up?: Date, down?: Date } = {}) {
  const _extensions = extensions.reduce(
    (p, c) => {
      if (c.hasOwnProperty('uuid')) {
        const { id } = c;
        p[id] = c;
      } else {
        if (!c.packageJSON.hasOwnProperty('uuid')) return p;
        
        const { packageJSON, isActive, id } = c;
        
        const {
          uuid,
          name,
          version,
          publisher
        } = packageJSON;

        p[id] = {
          isActive,
          uuid,
          name,
          publisher,
          version,
        };
      }

      return p;
    }
    , {}
  );

  const now = new Date();
  const metadada = {
    lastDown: last.down || now,
    lastUp: last.up || now,
    _extensions
  };

  return JSON.stringify(metadada, undefined, 4);
}