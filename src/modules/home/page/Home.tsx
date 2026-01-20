import {CenteredPage} from "../../../utils/components/container/CenteredPage.tsx";
import {Box, Button, TabList, Tabs, Tab, Typography, tabClasses, TabPanel, Divider} from "@mui/joy";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import {Input} from "../../../utils/components/core/Input"
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {ProjectListAll} from "../../project/components/ProjectListAll.tsx";
import {ProjectListMine} from "../../project/components/ProjectListMine.tsx";

export const Home = () => {
    const {t} = useTranslation()

    const nav = useNavigate()

    return (
        <CenteredPage sx={{gap: 1}}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1.5
                    }}
                >
                    <AccountTreeRoundedIcon sx={{fontSize: "1.5rem"}}/>
                    <Typography level={"h3"} color={"neutral"} fontWeight={"bold"}>
                        {t("home.label.projects")}
                    </Typography>
                </Box>
                <Button
                    startDecorator={<AddRoundedIcon/>}
                    onClick={() => {
                        nav("/new-project")
                    }}
                >
                    {t("home.action.do_new_project")}
                </Button>
            </Box>
            <Tabs sx={{backgroundColor: 'transparent'}}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <TabList
                        disableUnderline={true}
                        sx={{
                            [`&& .${tabClasses.root}`]: {
                                backgroundColor: 'transparent',
                                pb: 1.5,
                                pt: 1.5,
                                fontWeight: "bold",
                                color: "rgb(var(--joy-palette-neutral-mainChannel))",
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: "primary.plainColor",
                                },
                                [`&.${tabClasses.selected}`]: {
                                    color: 'primary.plainColor',
                                    '&::after': {
                                        height: 2,
                                        borderTopLeftRadius: 3,
                                        borderTopRightRadius: 3,
                                        backgroundColor: 'primary.500',
                                    },
                                },
                            },
                        }}
                    >
                        <Tab value={0}>
                            {t("home.label.all_projects")}
                        </Tab>
                        <Tab value={1}>
                            {t("home.label.my_projects")}
                        </Tab>
                    </TabList>
                    <Input
                        size={"md"}
                        placeholder={t("home.placeholder.filter_project")}
                    />
                </Box>
                <Divider/>
                <Box sx={{mt: 2}}/>
                <TabPanel value={0} sx={{p: 0}}>
                    <ProjectListAll/>
                </TabPanel>
                <TabPanel value={1} sx={{p: 0}}>
                    <ProjectListMine/>
                </TabPanel>
            </Tabs>
        </CenteredPage>
    )
}