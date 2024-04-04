import Editor from '../components/editor/Editor';
import useEditor from '../components/editor/useEditor';
import AuthGateway from '../components/auth/AuthGateway';

export default function Test() {
  const { save } = useEditor();

  return (
    <AuthGateway>
      <button onClick={() => save(false)}>세이브</button>
      <Editor />
    </AuthGateway>
  );
}
