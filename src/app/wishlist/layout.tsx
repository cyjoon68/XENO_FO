import CartProductBtn from "@/(FSD)/entities/cart/ui/CartProductBtn";
import TextMediumShared from "@/(FSD)/shareds/ui/TextMediumShared";
import AppFixedBtmBar from "@/(FSD)/widgets/app/ui/AppFixedBtmBar";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import AppNav from "@/(FSD)/widgets/app/ui/AppNav";
import React from "react";

const Layout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader
                    leftContent={<TextMediumShared fontWeight={"semibold"}>좋아요</TextMediumShared>}
                    rightContent={<CartProductBtn />}
                />
            </AppFixedTopBar>
            {children}
            <AppFixedBtmBar>
                <AppNav />
            </AppFixedBtmBar>
        </>
    );
};

export default Layout;