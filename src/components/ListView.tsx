import React, { ComponentType } from 'react';



function ListView(WrappedComponent: any, props: any) {
  return () => {
    return (
      <div>
        <WrappedComponent values={props.values}></WrappedComponent>
      </div>
    );
  }
}

export default ListView;
