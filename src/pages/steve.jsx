import { Card, CardContent, CardText, CardTitle } from "../componentes/card/card";
import { Chip } from "../componentes/chips/chip";
import { DivCol, DivRow, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { Tabs } from "../componentes/tabs/tabs";
import { TimeItem } from "../componentes/timeItem/timeItem";
import { ProfileSteve } from "./infosteve/profileSteve";
import { PostSteve } from "./postSteve/PostSteve";
import { SteveTimeLine } from "./steveTimeline/steveTimeLine";

export function Steve() {
    return (
        <div>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Steve Bartmoss"} text={"No le preuntes a la documentacion, preguntame a mi"} />
            <DivSection>
                <Tabs position="position-center" headers={
                    [
                        {
                            id: 1,
                            title: "Info",
                            content:
                                <ProfileSteve />,
                        },
                        {
                            id: 2,
                            title: "Time Line",
                            content:
                                <SteveTimeLine />,
                        },
                        {
                            id: 3,
                            title: "Post",
                            content:
                                <PostSteve />,
                        }
                    ]

                } />
            </DivSection>
        </div>
    )
}
