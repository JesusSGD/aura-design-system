import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";
import Button from "@aura-design/system/button";
import Icon from "@aura-design/system/icon";
import * as prismicH from "@prismicio/helpers";

import Link from "@/components/Link";

const DocumentationLink = ({ doc }) => {
  return (
    <Section container="smash">
      <Grid col="two">
        <div>
          {doc.data.prev?.id && (
            <div className="lefttxt">
              <Link field={doc.data.prev}>
                <a className="uline button-menu">
                  <div className="aureole one">
                    <div>
                      <span className="wall-pad">Next:</span>
                      <Icon
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </Icon>
                    </div>
                    <h3>{prismicH.asText(doc.data.prev?.data?.title)}</h3>
                  </div>
                </a>
              </Link>
            </div>
          )}
        </div>
        <div>
          {doc.data.next?.id && (
            <div className="righttxt">
              <Link field={doc.data.next}>
                <a className="uline button-menu">
                  <div className="aureole one">
                    <div>
                      <span className="wall-pad">Next:</span>
                      <Icon
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </Icon>
                    </div>
                    <h3>{prismicH.asText(doc.data.next?.data?.title)}</h3>
                  </div>
                </a>
              </Link>
            </div>
          )}
        </div>
      </Grid>
    </Section>
  );
};

export default DocumentationLink;
