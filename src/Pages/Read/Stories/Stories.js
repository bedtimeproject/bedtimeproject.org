import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../Components/Structural/SEO/SEO";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";

import "./Stories.scss";

/**
 * @function Stories
 * @description The parent component that handles much of the navigation for the
 * stories tab screens. This component also provides a wrapper with padding used
 * on this stack only
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.1.1
 * @component
 * @example
 * <Stories />
 */
export default function Stories() {
  return (
    <StandardWrapper>
      <div className="Stories-Container">
        <SEO title="Stories" />
        <PageTitle>Stories</PageTitle>
      </div>
    </StandardWrapper>
  );
}
