import React from "react";
import CollectionItem from "../collection-item/collections-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">
        {title.toUpperCase()}
        <div className="preview">
          {items
            .filter((item, index) => index < 4)
            .map(({ id, ...itemProps }) => (
              <CollectionItem key={id} {...itemProps} />
            ))}
        </div>
      </h1>
    </div>
  );
};

export default CollectionPreview;
