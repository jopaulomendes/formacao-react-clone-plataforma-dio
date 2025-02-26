import { Card } from "../../components/card";
import { Header } from "../../components/header";
import { UserInfo } from "../../components/use-info";
import { Column, Container, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1} >
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={90} nome="João Paulo" image="https://avatars.githubusercontent.com/u/29907185?v=4" />
                    <UserInfo percentual={75} nome="João Paulo" image="https://avatars.githubusercontent.com/u/29907185?v=4" />
                    <UserInfo percentual={50} nome="João Paulo" image="https://avatars.githubusercontent.com/u/29907185?v=4" />
                    <UserInfo percentual={30} nome="João Paulo" image="https://avatars.githubusercontent.com/u/29907185?v=4" />
                    <UserInfo percentual={10} nome="João Paulo" image="https://avatars.githubusercontent.com/u/29907185?v=4" />
                </Column>                
            </Container>
        </>
    )
}

export {Feed}
