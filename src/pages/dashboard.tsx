import { useState } from "react";
import Button from "../components/button";
import Card from "../components/card";
import { useGetAllCharacterQuery } from "../redux/characterApi";
import {
  DashboardContainer,
  Loader,
  StyledPagination,
} from "../styles/pages/dashboard";
import { usePagination } from "../util/pagination";

/**
 *Dashboard
 * @returns jsx
 */

function Dashboard() {
  const { isLoading, isError, data } = useGetAllCharacterQuery({});
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 3;

  const formatedData = usePagination({
    data: data?.results,
    limit: limit,
    offset: currentPage * limit,
  });

  if (isLoading) {
    return <Loader>Loading...</Loader>;
  }
  if (isError) {
    return <Loader>Something went wrong</Loader>;
  }

  const nextPage = () => {
    if (currentPage + 1 < Math.ceil(data?.results?.length / limit)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <DashboardContainer>
        {formatedData?.length > 0 &&
          formatedData?.map((item, index) => {
            return (
              <div key={index}>
                <Card {...item} />
              </div>
            );
          })}
      </DashboardContainer>
      <StyledPagination>
        <Button label="Prev" onclick={prevPage} disabled={currentPage <= 0} />
        <Button
          label="Next"
          onclick={nextPage}
          disabled={currentPage + 1 >= Math.ceil(data?.results?.length / limit)}
        />
      </StyledPagination>
    </>
  );
}

export default Dashboard;
