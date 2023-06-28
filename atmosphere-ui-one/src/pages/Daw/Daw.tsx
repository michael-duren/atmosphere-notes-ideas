import DawLayout from '../../components/Layout/DawLayout.tsx';
import Aside from '../../components/Features/Aside/Aside.tsx';
import Main from '../../components/Features/Main/Main.tsx';

export default function Daw() {
  return (
    <DawLayout>
      <Aside />
      <Main />
    </DawLayout>
  );
}
