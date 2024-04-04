import React from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';

let CustomEditorConfig = dynamic(() => import('./CustomEditorConfig'), {
  ssr: false,
});

const Editor = () => {
  return <>{CustomEditorConfig && <CustomEditorConfig />}</>;
};

export default connect((state) => state)(Editor);
