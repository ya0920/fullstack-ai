import { useTranslation } from "@/app/i18n/index.js";


export default async function Page({ params: { lng }}) {
    const { t } = await useTranslation(lng, 'basic');

    return <h1>{t('initText')}</h1>;
}