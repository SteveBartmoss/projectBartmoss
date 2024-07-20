import { DivCol, DivRow, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { Tabs } from "../componentes/tabs/tabs";


export function Steve() {
    return (
        <div>
            <Portada />
            <DivSection>
                <Tabs headers={
                    [
                        {
                            id: 0,
                            title: "Info",
                            content:
                                <div>
                                    <h1>Info personal</h1>
                                    <DivCol>
                                        <DivRow>
                                            <DivCol>
                                                <h1>Section de informacion</h1>
                                            </DivCol>
                                            <DivCol>
                                                <h1>Section de marcadores</h1>
                                            </DivCol>
                                        </DivRow>
                                    </DivCol>
                                </div>
                        },
                        {
                            id: 1,
                            title: "Time Line",
                            content:
                                <div>
                                    <h1>Info Time line</h1>
                                </div>,
                        },
                        {
                            id: 2,
                            title: "Post",
                            content:
                                <div>
                                    <h1>Info post</h1>
                                </div>,
                        }
                    ]

                } />

            </DivSection>
        </div>
    )
}