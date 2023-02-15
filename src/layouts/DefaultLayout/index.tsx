import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <div>
            <LayoutContainer>
                <Header />
                <Outlet /> {/*Tudo que for especifico de uma página vai ser demonstrado em Outlet */}
            </LayoutContainer>
        </div>
    )
}