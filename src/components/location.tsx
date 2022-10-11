import React from "react";
import { useGetLocationQuery } from "../redux/characterApi";
import { OriginContainer } from "../styles/components/origin.styles";

/**
 *
 * @param name url
 * @returns jsx
 */

function Location({ name, url }: { name: string; url: string }) {
  const id = url
    ? url.split("https://rickandmortyapi.com/api/location/")[1]
    : 1;
  const { data, isError } = useGetLocationQuery({ id });

  if (isError) {
    return (
      <OriginContainer>
        <p>Cannot fethc origin</p>
      </OriginContainer>
    );
  }
  return (
    <OriginContainer>
      <div>Location</div>
      <h3>
        {data?.name} - {data?.type}
      </h3>
      <h4>{data?.dimension}</h4>
      <p>{data?.residents?.length} residents</p>
    </OriginContainer>
  );
}

export default Location;
