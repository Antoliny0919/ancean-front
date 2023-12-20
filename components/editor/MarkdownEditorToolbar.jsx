import ToolBase from './tools/ToolBase';
import { FaBold } from 'react-icons/fa6';

export default function MarkdownEditorToolbar({ mdRef }) {
  return (
    <ToolBase mdRef={mdRef}>
      <FaBold />
    </ToolBase>
  );
}
