import {CenteredPage} from "../../../utils/components/container/centered-page.tsx";
import {Box, TabList, Tabs, Tab, tabClasses, TabPanel, Divider} from "@mui/joy";
import {Input} from "../../../utils/components/core/input.tsx"
import {useTranslation} from "react-i18next";
import {ProjectListAll} from "../../project/components/project-list-all.tsx";
import {ProjectListMine} from "../../project/components/project-list-mine.tsx";
import {CreateProjectButton} from "../../project/components/create-project-button.tsx";

export const Home = () => {
    const {t} = useTranslation()

    return (
        <CenteredPage sx={{gap: 1}}>
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
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5
                        }}
                    >
                        <Input
                            size={"md"}
                            placeholder={t("home.placeholder.filter_project")}
                        />
                        <CreateProjectButton/>
                    </Box>
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