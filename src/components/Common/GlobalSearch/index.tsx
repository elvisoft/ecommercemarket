import { XIcon } from '@/assets/icons';
import { useEffect, useRef, useState } from 'react';

const GlobalSearchModal = (props: any) => {
  const { searchModalOpen, setSearchModalOpen, currentFilter } = props;
  const [filterValue, setFilterValue] = useState(currentFilter || 'all');

  // handle ClickOutside
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside() {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setSearchModalOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <>
      {searchModalOpen ? (
        <div
          className={`backdrop-filter-sm visible fixed left-0 top-0 z-99999 flex min-h-screen w-full justify-center bg-[#000]/40 px-4 py-8 sm:px-8`}
        >
          <div
            ref={ref}
            className="shadow-7 relative w-full max-w-[1280px] scale-100 transform rounded-[15px] bg-white transition-all"
          >
            <button
              onClick={() => setSearchModalOpen(false)}
              className="text-body absolute -right-6 -top-6 z-9999 flex h-11.5 w-11.5 items-center justify-center rounded-full border-2 border-stroke bg-white hover:text-dark"
            >
              <XIcon width={24} height={24} />
            </button>

            <div className="h-auto max-h-[calc(100vh-70px)] overflow-y-auto rounded-b-[15px]">
             
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GlobalSearchModal;
