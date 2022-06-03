import React from "react";
import "./QuipsDisplay.scss";

import BlockContent from "@sanity/block-content-to-react";
import { imageUrl } from "../../../../utils/imageUrl/imageUrl";
import sanityClient from "../../../../client";

/**
 * @namespace QuipsDisplay
 * @function QuipsDisplay
 * @description A wrapper that handles rendering the quips.
 * @param {object} props The JSX props passed to this React component
 * @param {object} props.quip The quip to display in this view.
 * @param {number} props.index
 * @param {number} props.openQuip
 * @param {function} props.setOpenQuip
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 3.0.2
 * @component
 * @example
 * <QuipsDisplay quip={quip} />
 */
export default function QuipsDisplay({ quip, index, openQuip, setOpenQuip }) {
  return (
    <>
      <style>{`
        .QuipsDisplay-Container.Quip${index} {
          z-index: ${index + 1};
          animation: sendBackToSpot${index} 1s ease;
        }

        .QuipsDisplay-Container.Quip${index}.Active {
          animation: bringToFront${index} 1s ease;
          z-index: 1000;
          transform: scale(1.1);
        }

        @keyframes bringToFront${index} {
          0% {
            transform: translateY(0%) scale(1);
            z-index: ${index + 1};
          }
      
          50% {
            transform: translateY(-110%) rotate(5deg) rotateX(20deg);
            z-index: ${index + 1};
          }
          51% {
            z-index: 1000;
          }
      
          100% {
            transform: translateY(0%) scale(1.1);
            z-index: 1000;
          }
        }
      
        @keyframes sendBackToSpot${index} {
          0% {
            transform: translateY(0%) scale(1.1);
            z-index: 1000;
          }
      
          49% {
            z-index: 1000;
          }

          50% {
            transform: translateY(-110%) rotate(5deg) rotateX(20deg);
            z-index: ${index + 1};
          }
      
          100% {
            transform: translatey(0%) scale(1);
            z-index: ${index + 1};
          }
        }
      `}</style>
      <div
        className={`QuipsDisplay-Container Quip${index} ${
          openQuip === index ? "Active" : ""
        }`}
        style={{ top: index * 30 + 80 }}
      >
        <div className="QuipsInternalWrapper">
          <button
            className="QuipTitleButton"
            onClick={() => {
              if (openQuip === index) {
                setOpenQuip(undefined);
              } else {
                setOpenQuip(index);
              }
            }}
          >
            <h2>{quip.title}</h2>
          </button>
          <div className="LeftBox">
            <BlockContent
              blocks={quip.body}
              projectId={sanityClient.config().projectId}
              dataset={sanityClient.config().dataset}
            />
            {quip.author && <div className="Author">- {quip.author}</div>}
          </div>
          {quip.mainImage && (
            <div className="RightBox">
              <img src={imageUrl(quip.mainImage).url()} alt={quip.alt} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
