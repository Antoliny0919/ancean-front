import Highlight from 'react-highlight';
import '@/node_modules/highlight.js/styles/atom-one-dark.css';

export default function Code({ children }) {
  return <Highlight className="javascript">{children}</Highlight>;
}
