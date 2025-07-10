import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Hammer" className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Кузьасский штукатур
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Проекты
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Цены
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Профессиональный ремонт в Кемерово
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Качественный ремонт квартир
            <br />
            <span className="text-blue-600">с гарантией результата</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Мы специализируемся на комплексном ремонте квартир в Кемерово.
            Профессиональная команда, качественные материалы, сроки без
            задержек.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Рассчитать стоимость
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Icon name="Play" className="h-5 w-5 mr-2" />
              Смотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия 2 года</h3>
              <p className="text-gray-600">
                На все виды работ предоставляется официальная гарантия
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Точные сроки</h3>
              <p className="text-gray-600">
                Соблюдаем договорные сроки без задержек
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опыт 15+ лет</h3>
              <p className="text-gray-600">
                Большой опыт работы и сотни довольных клиентов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600">
              Полный спектр работ по ремонту квартир
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Paintbrush"
                  className="h-8 w-8 text-blue-600 mb-2"
                />
                <CardTitle>Косметический ремонт</CardTitle>
                <CardDescription>
                  Покраска, поклейка обоев, мелкий ремонт
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Быстрое обновление интерьера без серьезных вложений
                </p>
                <div className="text-lg font-semibold text-blue-600">
                  от 1,200 ₽/м²
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wrench" className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Капитальный ремонт</CardTitle>
                <CardDescription>
                  Полная замена коммуникаций, выравнивание стен
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Комплексное обновление с заменой всех систем
                </p>
                <div className="text-lg font-semibold text-blue-600">
                  от 3,500 ₽/м²
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Sparkles" className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Евроремонт</CardTitle>
                <CardDescription>
                  Ремонт премиум-класса с дизайн-проектом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Элитный ремонт с использованием премиальных материалов
                </p>
                <div className="text-lg font-semibold text-blue-600">
                  от 6,000 ₽/м²
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши работы
            </h2>
            <p className="text-lg text-gray-600">
              Примеры выполненных проектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <img
                  src="/img/a6824491-d0ea-4f30-aa14-e56a1da1a770.jpg"
                  alt="Современная кухня"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600">Кухня</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Современная кухня</CardTitle>
                <CardDescription>
                  Комплексный ремонт кухни 15 м²
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <img
                  src="/img/d70bf7b9-7438-4723-b8dc-af1d2ebbbda5.jpg"
                  alt="Гостиная"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600">Гостиная</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Уютная гостиная</CardTitle>
                <CardDescription>Евроремонт гостиной 25 м²</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <img
                  src="/img/0600a2e2-d80d-4d22-bf9e-943dbe21fe7f.jpg"
                  alt="Ванная комната"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-600">Ванная</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Стильная ванная</CardTitle>
                <CardDescription>Полный ремонт ванной 8 м²</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Цены на услуги
            </h2>
            <p className="text-lg text-gray-600">
              Честная стоимость без скрытых платежей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Косметический</CardTitle>
                <CardDescription>Обновление интерьера</CardDescription>
                <div className="text-2xl font-bold text-blue-600">
                  от 1,200 ₽/м²
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Поклейка обоев
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Покраска стен
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Мелкий ремонт
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-shadow border-2 border-blue-600">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600">Популярно</Badge>
              </div>
              <CardHeader>
                <CardTitle>Капитальный</CardTitle>
                <CardDescription>Полное обновление</CardDescription>
                <div className="text-2xl font-bold text-blue-600">
                  от 3,500 ₽/м²
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Замена коммуникаций
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Выравнивание стен
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Новые полы
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Евроремонт</CardTitle>
                <CardDescription>Премиум качество</CardDescription>
                <div className="text-2xl font-bold text-blue-600">
                  от 6,000 ₽/м²
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Дизайн-проект
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Премиум материалы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Авторский надзор
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать ремонт?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Оставьте заявку и получите бесплатную консультацию и замер
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              +7 (384) 2-XXX-XXX
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="MessageSquare" className="h-5 w-5 mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="MapPin" className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-blue-100">г. Кемерово, ул. Советская, 1</p>
            </div>
            <div>
              <Icon name="Clock" className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Время работы</h3>
              <p className="text-blue-100">
                Пн-Пт: 9:00-18:00
                <br />
                Сб: 10:00-16:00
              </p>
            </div>
            <div>
              <Icon name="Mail" className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-100">info@kuzass-shtukatur.ru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Hammer" className="h-6 w-6" />
            <span className="text-lg font-semibold">Кузьасский штукатур</span>
          </div>
          <p className="text-gray-400">
            © 2024 Кузьасский штукатур. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
