import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import UniqueOverlay from "../UniqueOverlay";
import { ModelsWrapper, ModelSection } from "../Model";

import { Container, Spacer } from "./styles";

const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        "Qiyana",
                        "Irelia",
                        "Yone",
                        "Le Blanc",
                        "Diana",
                        "Syndra",
                        "Elise",
                    ].map((modelName) => (
                        <ModelSection
                            key={modelName}
                            className="colored"
                            modelName={modelName}
                            overlayNode={
                                <DefaultOverlayContent
                                    label={modelName}
                                    description="" />} />
                    ))}
                </div>
                <Spacer />
                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    );
};

export default Page;