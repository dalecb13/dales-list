'use client';

import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export type MapProps = {
  position: [number, number],
  zoom: number
}

function MapWrapper(props: MapProps) {
  return <LazyMap {...props} />;
}

export default MapWrapper;