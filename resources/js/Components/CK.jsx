import React from 'react'
import { CKEditor } from 'ckeditor4-react';
export default CK = () => {
  return (
    <CKEditor
        initData="<p>Hello from CKEditor 4!</p>"
        config={{allowedContent: true}}
        onInstanceReady={ () => {console.log('CKEditor 4')} }
    />
  )
}

