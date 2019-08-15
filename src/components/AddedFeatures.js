import React from 'react';
import { useSelector } from 'react-redux';
import AddedFeature from './AddedFeature';
import { Segment } from 'semantic-ui-react'

const AddedFeatures = () => {
  const state = useSelector(state => state);

  return (

<Segment raised>
  
    <div className="content">
      <h6>Added features:</h6>
      {state.car.features.length ? (
        <ol type="1">
          {state.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
</Segment>
  );
};

export default AddedFeatures;
