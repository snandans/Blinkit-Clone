import useFetchData from '../../../../../../organisms/helpers/useFetchData';
import { displaySection } from './helpers/sidebar.displaySection';

function Sidebar({ handleChange }) {
  const categories = useFetchData('categories');
  return (
    <aside className="aside flex__column">
      {
        displaySection(categories,handleChange)
        }
    </aside>
  )
}

export default Sidebar;