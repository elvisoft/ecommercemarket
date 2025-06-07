import Breadcrumb from '@/components/Common/Breadcrumb';
import ShopWithoutSidebar from '@/components/ShopWithoutSidebar';
import { getProductsByFilter } from '@/sanity/sanity-shop-utils';
import { Metadata } from 'next';
import SearchInput from '@/components/SearchInput'; // importa el nuevo componente

export const metadata: Metadata = {
  title: 'Shop Page | NextMerce | Next.js E-commerce Boilerplate',
  description: 'This is Shop Page for NextMerce Template',
  // other metadata
};

type PageProps = {
  searchParams: {
    sort?: string;
    search?: string;
  };
};

const ShopWithoutSidebarPage = async ({ searchParams }: PageProps) => {
  const sort = searchParams.sort || '';
  const search = searchParams.search || '';

  let sortQuery = '| order(publishedAt desc)';
  if (sort === 'popular') {
    sortQuery = '| order(length(reviews) desc)';
  }

  // Filtro por name o description
  let searchFilter = '';
  if (search) {
    searchFilter = `&& (name match "*${search}*" || description[].children[].text match "*${search}*")`;
  }

  const query = `*[_type == "product" ${searchFilter}] ${sortQuery}`;
  const data = await getProductsByFilter(query, ['product']);

  return (
    <main>
      <Breadcrumb
        title={'Explore All Products'}
        pages={['shop', '/', 'shop without sidebar']}
      />
      
      <ShopWithoutSidebar key={sort + search} shopData={data} />
    </main>
  );
};

export default ShopWithoutSidebarPage;
