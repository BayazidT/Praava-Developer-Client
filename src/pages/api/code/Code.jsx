import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useState } from 'react';
import './code.scss';

const Code = ({ codeString }) => {
    const [copied, setCopied ] = useState(false);
    return(
        <div className='code'>
          
            <CopyToClipboard text={codeString}
          onCopy={() => setCopied(true)}><div className='copy-icon'>{copied? <ContentPasteIcon className='past-icon'/>:<ContentCopyIcon />}</div></CopyToClipboard>
            <SyntaxHighlighter language="javascript" style={materialDark} >
                   {codeString}
            </SyntaxHighlighter>
        </div>

  )
}

export default Code