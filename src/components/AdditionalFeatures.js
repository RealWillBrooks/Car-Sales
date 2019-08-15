import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { useSelector } from 'react-redux'

const AdditionalFeatures = () => {
  const state = useSelector(state => state);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {state.store.length ? (
        <ol type="1">
          {state.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
