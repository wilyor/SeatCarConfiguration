import HomePage from '../Pages/HomePage'
import CarDetailPage from '../Pages/CarDetailPage';
import CarCustomizationPage from '../Pages/CarCustomizationPage';
import SummaryPage from '../Pages/SummaryPage';

describe('template spec', () => {
  it('passes', () => {

    HomePage.GotoMainPage();
    HomePage.SelectCar('IBIZA');

    CarDetailPage.CheckCarTitle('IBIZA');
    CarDetailPage.StartCustomization();

    //Motor
    CarCustomizationPage.CheckPartTitle("Motor");
    CarCustomizationPage.Continue();

    //Exterior
    CarCustomizationPage.CheckPartTitle("Exterior");
    CarCustomizationPage.Continue();

    //Interior
    CarCustomizationPage.CheckPartTitle("Interior");
    CarCustomizationPage.Continue();

    //Opcionales
    CarCustomizationPage.CheckPartTitle("Opcionales");
    CarCustomizationPage.Continue();

    //Finales
    SummaryPage.CheckPageTitle('Resumen');
    SummaryPage.CheckConfigurationKeyExists();
    SummaryPage.CheckPrice('Total','20.850 €');
    SummaryPage.CheckPrice('Precio estándar','20.200 €');
    SummaryPage.CheckPrice('Equipamiento opcional','650 €');
  })
})