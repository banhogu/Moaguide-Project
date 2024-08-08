import React, { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[360px] w-full mx-auto desk:max-w-[1900px] desk:min-w-[400px]">
      {children}
    </div>
  );
};

export default Container;
