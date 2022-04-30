
export function getData(){
const data = [
    {
      sector: "Agricultura e Pecuária",
      subSector: "Comunidade agrícola"
    },
    {
      sector: "Agricultura e Pecuária",
      subSector: "Extração de madeira"
    },
    {
      sector: "Agricultura e Pecuária",
      subSector: "Fazenda ou granja"
    },
    {
      sector: "Agricultura e Pecuária",
      subSector: "Pecuarista"
    },
    {
      sector: "Agricultura e Pecuária",
      subSector: "Produtor de flores"
    },
    {
      sector: "Agricultura e Pecuária",
      subSector: "Produtor de orgânicos"
    },
    {
      sector: "Agricultura e Pecuária",
      subSector: "Serviço Agrícola"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Artista e grupo musical"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Ateliê de arte"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Atração turística"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Auditório"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Aulas e Instrução de Música"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Biblioteca"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Centro Comunitário"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Coletivo de arte"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Distribuição de livros e revistas"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Editora"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Galeria de arte"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Instrutor de dança"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Jornal e revista"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Livraria"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Local de apresentação"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Museu"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Museu de Arte"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Museu de Comunicação"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Museu de História"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Orquestra"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Plataforma de notícias"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Produção musical"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Teatro"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Educação em artes cênicas"
    },
    {
      sector: "Arte e Cultura",
      subSector: "Escola de artes"
    },
    {
      sector: "Automotivo",
      subSector: "Aluguel de carros exóticos"
    },
    {
      sector: "Automotivo",
      subSector: "Aluguel de trailer"
    },
    {
      sector: "Automotivo",
      subSector: "Comércio de veículos"
    },
    {
      sector: "Automotivo",
      subSector: "Comércio de veículos recreativos"
    },
    {
      sector: "Automotivo",
      subSector: "Concessionária de carros"
    },
    {
      sector: "Automotivo",
      subSector: "Conserto de motocicletas"
    },
    {
      sector: "Automotivo",
      subSector: "Customização Automotiva"
    },
    {
      sector: "Automotivo",
      subSector: "Despachante automotivo"
    },
    {
      sector: "Automotivo",
      subSector: "Inspeção automotiva"
    },
    {
      sector: "Automotivo",
      subSector: "Lavagem de carros e detalhamento"
    },
    {
      sector: "Automotivo",
      subSector: "Locação de automóveis"
    },
    {
      sector: "Automotivo",
      subSector: "Oficina de mecânica"
    },
    {
      sector: "Automotivo",
      subSector: "Oficina e comércio  de bicietas"
    },
    {
      sector: "Automotivo",
      subSector: "Peças e acessórios automotivos"
    },
    {
      sector: "Automotivo",
      subSector: "Peças e acessórios para carros"
    },
    {
      sector: "Automotivo",
      subSector: "Posto de gasolina"
    },
    {
      sector: "Automotivo",
      subSector: "Reparos automotivos"
    },
    {
      sector: "Automotivo",
      subSector: "Revendedor de pneus"
    },
    {
      sector: "Automotivo",
      subSector: "Serviço de assistência automotiva"
    },
    {
      sector: "Automotivo",
      subSector: "Serviço de lubrificação"
    },
    {
      sector: "Automotivo",
      subSector: "Serviço de reboque"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Aromaterapia"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Barbearia"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Cabeleireiro"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Cosméticos e suprimentos de beleza"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Cuidados com a pele"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Depilação"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Depilação à laser"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Equipamentos de cabelo e beleza"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Estética"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Ioga e Pilates"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Loja de perucas"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Manicure"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Maquiador"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Massagem"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Salão de beleza"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Salão de bronzeamento"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Spa"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Spa diurno"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Spa médico"
    },
    {
      sector: "Bem-estar e Estética",
      subSector: "Spa, beleza e cuidados pessoais"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Acessórios para celular"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Aluguel de banheiros portáteis"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Antiguidades e Vintage"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Artigos para arte e artesanato"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Caça e Pesca"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Cama, mesa e banho"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Centro de compras"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Centro de jardinagem"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Comércio de colchões"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Computadores e eletrônicos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Cosméticos e suprimentos de beleza"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Decoração"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Distribuição de água"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Eletrodomésticos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Equipamento de rádio e comunicação"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Estacionamento"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Farmácia de manipulação"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Ferragem e materiais de construção"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Florista"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Galeria comercial"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Iluminação"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Joalheria"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Lavanderia"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Leilões"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Livraria"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de acessórios"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de antiguidades"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de armas"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de artigos esportivos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de atacado e suprimentos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de bicicleta"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de brinquedos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de celulares"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de cinema em casa"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de colecionáveis"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de conveniência"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de departamento"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de descontos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de discos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de eletrônicos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de equipamentos ao ar livre"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de fantasias"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de instrumentos musicais"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de móveis"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de noivas"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de penhores"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de presentes"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de presentes culturais"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de roupas"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de roupas femininas"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de roupas infantis"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de roupas masculinas"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de sapatos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja de tapetes e pisos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja Geek"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja sazonal e pop-up"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Loja virtual"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Manutenção de piscinas"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Material de cozinha"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Material de escritório"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Melhoria da casa"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Mercado"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Móveis"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Óptica e relojoaria"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Outlet"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Outro"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Persianas e cortinas"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Roupa de banho"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Roupa de esporte"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Roupa formal"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Segurança do lar"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Serviço de bagagem"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Serviço de esgoto"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Skate e surf shop"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Utensílios domésticos"
    },
    {
      sector: "Comércio e Serviços",
      subSector: "Vinícola e vinhedo"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Adoção e abrigo de animais"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Casa de recuperação"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Centro de Formação de Condutores"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Centro de Prevenção de Crises"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Consulado e Embaixada"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Corpo de Bombeiros"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Correios"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Delegacia de polícia"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Habitação e abrigo para sem-teto"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Instituição de caridade"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Locais públicos e atrações"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Lotérica"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Organização governamental"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Organização Não-Governamental"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Parque"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Prisão e Penitenciária"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Reciclagem e Gestão de Resíduos"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Segurança pública"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Serviço de Assistência à Habitação"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Serviço de sepultamento e cremação"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Serviço funerário"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Serviços de proteção infantil"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Serviços públicos"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Serviços sociais"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Tabelião Público"
    },
    {
      sector: "Comunidade e Governo",
      subSector: "Utilidade pública"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Alvenaria e olaria"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Arquiteto"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Casas móveis"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Designer de interiores"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Empreiteiro"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Equipamentos de construção"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Paisagismo"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Serviços de construção e reforma"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Serviço de Engenharia"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Serviço de Pavimentação e Asfalto"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Serviço de Perfuração de Poço"
    },
    {
      sector: "Construção e Arquitetura",
      subSector: "Serviço e Fornecimento de Equipamentos"
    },
    {
      sector: "Design e Moda",
      subSector: "Alfaiataria"
    },
    {
      sector: "Design e Moda",
      subSector: "Confecção de vestuário"
    },
    {
      sector: "Design e Moda",
      subSector: "Design de jóias"
    },
    {
      sector: "Design e Moda",
      subSector: "Design de produtos"
    },
    {
      sector: "Design e Moda",
      subSector: "Design gráfico"
    },
    {
      sector: "Design e Moda",
      subSector: "Design de moda"
    },
    {
      sector: "Design e Moda",
      subSector: "Design de móveis"
    },
    {
      sector: "Educação",
      subSector: "Comunidade educacional"
    },
    {
      sector: "Educação",
      subSector: "Consultor educacional"
    },
    {
      sector: "Educação",
      subSector: "Creche e pré-escola"
    },
    {
      sector: "Educação",
      subSector: "Escola"
    },
    {
      sector: "Educação",
      subSector: "Escola de aviação"
    },
    {
      sector: "Educação",
      subSector: "Escola de condução"
    },
    {
      sector: "Educação",
      subSector: "Escola de culinária"
    },
    {
      sector: "Educação",
      subSector: "Escola de idiomas"
    },
    {
      sector: "Educação",
      subSector: "Escola Ensino Fundamental"
    },
    {
      sector: "Educação",
      subSector: "Escola Ensino Médio"
    },
    {
      sector: "Educação",
      subSector: "Escola particular"
    },
    {
      sector: "Educação",
      subSector: "Escola primária"
    },
    {
      sector: "Educação",
      subSector: "Escola pública"
    },
    {
      sector: "Educação",
      subSector: "Faculdade e universidade"
    },
    {
      sector: "Educação",
      subSector: "Instituto técnico"
    },
    {
      sector: "Educação",
      subSector: "Materiais Educacionais"
    },
    {
      sector: "Educação",
      subSector: "Organização educacional"
    },
    {
      sector: "Educação",
      subSector: "Pesquisa educacional"
    },
    {
      sector: "Educação",
      subSector: "Programa de intercâmbio"
    },
    {
      sector: "Educação",
      subSector: "Serviço Educacional"
    },
    {
      sector: "Educação",
      subSector: "Treinamento em Informática"
    },
    {
      sector: "Educação",
      subSector: "Tutoria e ensino particular"
    },
    {
      sector: "Entretenimento",
      subSector: "Aluguel de barco"
    },
    {
      sector: "Entretenimento",
      subSector: "Aluguel de bicicletas"
    },
    {
      sector: "Entretenimento",
      subSector: "Bar"
    },
    {
      sector: "Entretenimento",
      subSector: "Boliche"
    },
    {
      sector: "Entretenimento",
      subSector: "Casa de shows"
    },
    {
      sector: "Entretenimento",
      subSector: "Casa noturna"
    },
    {
      sector: "Entretenimento",
      subSector: "Centro Recreativo"
    },
    {
      sector: "Entretenimento",
      subSector: "Cinema"
    },
    {
      sector: "Entretenimento",
      subSector: "Circo"
    },
    {
      sector: "Entretenimento",
      subSector: "Clube de comédia"
    },
    {
      sector: "Entretenimento",
      subSector: "Clube de dança"
    },
    {
      sector: "Entretenimento",
      subSector: "Clube de jazz"
    },
    {
      sector: "Entretenimento",
      subSector: "Clube recreativo"
    },
    {
      sector: "Entretenimento",
      subSector: "Entretenimento adulto"
    },
    {
      sector: "Entretenimento",
      subSector: "Fliperama"
    },
    {
      sector: "Entretenimento",
      subSector: "Karaokê"
    },
    {
      sector: "Entretenimento",
      subSector: "Lounge"
    },
    {
      sector: "Entretenimento",
      subSector: "Marina"
    },
    {
      sector: "Entretenimento",
      subSector: "Minigolfe"
    },
    {
      sector: "Entretenimento",
      subSector: "Paintball"
    },
    {
      sector: "Entretenimento",
      subSector: "Paraquedismo e esportes aéreos"
    },
    {
      sector: "Entretenimento",
      subSector: "Parque aquático"
    },
    {
      sector: "Entretenimento",
      subSector: "Parque de diversão"
    },
    {
      sector: "Entretenimento",
      subSector: "Pesque-pague"
    },
    {
      sector: "Entretenimento",
      subSector: "Recreação ao ar livre"
    },
    {
      sector: "Entretenimento",
      subSector: "Santuário da Vida Selvagem"
    },
    {
      sector: "Entretenimento",
      subSector: "Sinuca e bilhar"
    },
    {
      sector: "Entretenimento",
      subSector: "Venda de ingressos"
    },
    {
      sector: "Entretenimento",
      subSector: "Zoológico e aquário"
    },
    {
      sector: "Entretenimento",
      subSector: "Tabacaria"
    },
    {
      sector: "Esporte",
      subSector: "Academia"
    },
    {
      sector: "Esporte",
      subSector: "Artes marciais"
    },
    {
      sector: "Esporte",
      subSector: "Autódromo"
    },
    {
      sector: "Esporte",
      subSector: "Balonismo"
    },
    {
      sector: "Esporte",
      subSector: "Beach Tennis"
    },
    {
      sector: "Esporte",
      subSector: "Campo de golfe"
    },
    {
      sector: "Esporte",
      subSector: "Centro de Esportes"
    },
    {
      sector: "Esporte",
      subSector: "Clube social"
    },
    {
      sector: "Esporte",
      subSector: "Escalada"
    },
    {
      sector: "Esporte",
      subSector: "Escola Esportiva"
    },
    {
      sector: "Esporte",
      subSector: "Esportes aquáticos"
    },
    {
      sector: "Esporte",
      subSector: "Kart"
    },
    {
      sector: "Esporte",
      subSector: "Local de esportes e estádio"
    },
    {
      sector: "Esporte",
      subSector: "Mergulho"
    },
    {
      sector: "Esporte",
      subSector: "Mountain Bike"
    },
    {
      sector: "Esporte",
      subSector: "Organização esportiva"
    },
    {
      sector: "Esporte",
      subSector: "Padel e squash"
    },
    {
      sector: "Esporte",
      subSector: "Patinação e skate"
    },
    {
      sector: "Esporte",
      subSector: "Personal trainer"
    },
    {
      sector: "Esporte",
      subSector: "Promotor de esportes"
    },
    {
      sector: "Esporte",
      subSector: "Rafting"
    },
    {
      sector: "Esporte",
      subSector: "Rodeio"
    },
    {
      sector: "Esporte",
      subSector: "Tênis"
    },
    {
      sector: "Esporte",
      subSector: "Tiro com arco"
    },
    {
      sector: "Estilo de Vida e Bem-Estar",
      subSector: "Coaching Pessoal"
    },
    {
      sector: "Estilo de Vida e Bem-Estar",
      subSector: "Escola de surf"
    },
    {
      sector: "Estilo de Vida e Bem-Estar",
      subSector: "Personal Shopper"
    },
    {
      sector: "Estilo de Vida e Bem-Estar",
      subSector: "Serviço de barco"
    },
    {
      sector: "Estilo de Vida e Bem-Estar",
      subSector: "Serviço de relacionamento amoroso"
    },
    {
      sector: "Estilo de Vida e Bem-Estar",
      subSector: "Serviços de estilo de vida"
    },
    {
      sector: "Estilo de Vida e Bem-Estar",
      subSector: "Stand e academia de tiro"
    },
    {
      sector: "Estilo de Vida e Bem-Estar",
      subSector: "Tatuagem e piercing"
    },
    {
      sector: "Eventos",
      subSector: "Acessórios para festa"
    },
    {
      sector: "Eventos",
      subSector: "Animador"
    },
    {
      sector: "Eventos",
      subSector: "Bandas e músicos"
    },
    {
      sector: "Eventos",
      subSector: "Casa de festas"
    },
    {
      sector: "Eventos",
      subSector: "Centro de Convenções"
    },
    {
      sector: "Eventos",
      subSector: "Cerimonialista"
    },
    {
      sector: "Eventos",
      subSector: "DJ"
    },
    {
      sector: "Eventos",
      subSector: "Fornecedor"
    },
    {
      sector: "Eventos",
      subSector: "Local do evento"
    },
    {
      sector: "Eventos",
      subSector: "Organização de feiras e congressos"
    },
    {
      sector: "Eventos",
      subSector: "Planeador de eventos"
    },
    {
      sector: "Eventos",
      subSector: "Plano de casamento"
    },
    {
      sector: "Eventos",
      subSector: "Serviço de barman"
    },
    {
      sector: "Financeiro",
      subSector: "Aconselhamento de Crédito"
    },
    {
      sector: "Financeiro",
      subSector: "Agência de cobrança"
    },
    {
      sector: "Financeiro",
      subSector: "Agente de seguros"
    },
    {
      sector: "Financeiro",
      subSector: "Avaliador"
    },
    {
      sector: "Financeiro",
      subSector: "Câmbio monetário"
    },
    {
      sector: "Financeiro",
      subSector: "Consultoria Financeira"
    },
    {
      sector: "Financeiro",
      subSector: "Corretor de seguros"
    },
    {
      sector: "Financeiro",
      subSector: "Fianças"
    },
    {
      sector: "Financeiro",
      subSector: "Fintech e meios de pagamento"
    },
    {
      sector: "Financeiro",
      subSector: "Investimentos"
    },
    {
      sector: "Financeiro",
      subSector: "Planejamento financeiro"
    },
    {
      sector: "Financeiro",
      subSector: "Planejamento Imobiliário"
    },
    {
      sector: "Financeiro",
      subSector: "Serviço de adiantamento em dinheiro"
    },
    {
      sector: "Financeiro",
      subSector: "Serviços financeiros"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Açaí"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Açougue"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Aula de Culinária"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Bar de esportes"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Bar de vinhos"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Bar e restaurante de tapas"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Barraca de comida"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Brigadeiria"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Cachorro-quente"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Confeitaria e patisserie"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Cafeteria"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Cervejaria e Pub"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Cervejaria"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Churrascaria"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Consultor de alimentos"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Creperia"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Cupcakes e rosquinhas"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Cyber Café"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Dark kitchen"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Delicatessen"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Feira e produtor de orgânicos"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Food-truck e comida de rua"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Hamburgueria"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Loja de bebidas"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Loja de comida saudável"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Loja de conveniência"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Loja de doces"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Loja de frutas e legumes"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Loja de peixe e batatas fritas"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Loja de sanduíches"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Mercado de Agricultores"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Mercearia Especializada"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Mercearia étnica"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Padaria"
    },
    {
      sector: "Gastronomia e alimentação",
      subSector: "Pizzaria"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Pub e gastropub"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante afegão"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante africano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante alemão"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante americano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante argentino"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante asiático"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante Basco"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante belga"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante brasileiro"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante britânico"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante buffet"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante cajun e crioulo"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante canadense"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante Caribenho"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante chinês"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante coreano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante cubano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante de café da manhã e brunch"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante de comida saudável"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante de filés"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante de fondue"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante de frango"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante de frutos do mar"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante de sobremesas"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante Dim Sum"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante do Oriente Médio"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante do sudoeste"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante escandinavo"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante espanhol"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante etíope"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante europeu moderno"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante fast food"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante francês"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante grego"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante Halal"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante havaiano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante húngaro"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante indiano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante indonésio"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante internacional"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante irlandês"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante italiano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante japonês"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante Kosher"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante latino-americano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante libanês"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante marroquino"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante mediterrâneo"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante mexicano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante paquistanês"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante persa"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante peruano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante polinésio"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante polonês"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante português"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante requintado"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante russo"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante sem glúten"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante Sopa"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante Soul Food"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante tailandês"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante tarde da noite"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante Tex-Mex"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante turco"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Restaurante vegetariano e vegano"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Serviço e distribuição de alimentos e bebidas"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Sorveteria e iogurteria"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Sucos e milkshakes"
    },
    {
      sector: "Gastronomia e Alimentação",
      subSector: "Suprimentos para restaurantes"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Serviço de hospitalidade"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Cama e café da manhã"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Cabine"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Camping"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Hostel"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Hotel"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Pousada"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Motel"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Resort"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Passeios de barco"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Serviço de fornecimento de hotel"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Excursões"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Passeios ecológicos"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Companhia de Turismo"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Guia turístico"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Informação turística"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Transporte para o aeroporto"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Cruzeiro"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Balsa e Barco"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Alojamento"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Serviço de passaporte e visto"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Passeios turísticos"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Agência de viagens"
    },
    {
      sector: "Hospitalidade e Turismo",
      subSector: "Hotel Fazenda"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Serviços de automação"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Biotecnologia"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Equipamento Comercial e Industrial"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Fabricação"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Fabricação de colchões"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Metais"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Plásticos"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Refrigeração"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Têxteis"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Carpinteiro"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Condomínio Industrial"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Equipamentos e serviços bancários"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Artigos de borracha"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Produtos Químicos e Gases"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Serviços Petrolíferos"
    },
    {
      sector: "Indústria e Suprimentos",
      subSector: "Equipamentos industriais"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Gráfica offset"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Serviço de caligrafia"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Serviço de Sinalização e Banner"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Serviços Artísticos"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Transmissão e produção de mídia"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Serviço de entretenimento"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Consultor de imagens"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Consultor de Pesquisa de Mercado"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Consultor de marketing"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Agência de modelos"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Estúdio de Cinema e Televisão"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Fotógrafo"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Serviços e equipamentos fotográficos"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Relações Públicas"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Editora"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Serigrafia e bordados"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Desenvolvimento Web"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Agência de marketing digital"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Gráfica expressa"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Serviço de redação e editorial"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Serviço de merchandising"
    },
    {
      sector: "Marketing e Comunicação",
      subSector: "Serviço de pesquisa"
    },
    {
      sector: "Marketing e Design",
      subSector: "Agência de propaganda"
    },
    {
      sector: "Marketing e Design",
      subSector: "Design de Jóias"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Taxidermista"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Adestramento"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Passeador de cães"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Cavalos"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Canil"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Criador de animais de estimação"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Cemitério de Animais de Estimação"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Escova de um animal de estimação"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Babá de animais"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Pet Shop"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Veterinário"
    },
    {
      sector: "Produtos e Serviços para Animais",
      subSector: "Serviço de animais de estimação"
    },
    {
      sector: "Religião",
      subSector: "Igreja Episcopal Metodista Africana"
    },
    {
      sector: "Religião",
      subSector: "Igreja Anglicana"
    },
    {
      sector: "Religião",
      subSector: "Igreja Apostólica"
    },
    {
      sector: "Religião",
      subSector: "Assembleia de Deus"
    },
    {
      sector: "Religião",
      subSector: "Igreja Batista"
    },
    {
      sector: "Religião",
      subSector: "Igreja Católica"
    },
    {
      sector: "Religião",
      subSector: "Igreja Carismática"
    },
    {
      sector: "Religião",
      subSector: "Igreja cristã"
    },
    {
      sector: "Religião",
      subSector: "Igreja da Ciência Cristã"
    },
    {
      sector: "Religião",
      subSector: "Igreja de Cristo"
    },
    {
      sector: "Religião",
      subSector: "Igreja de Deus"
    },
    {
      sector: "Religião",
      subSector: "Igreja de Jesus Cristo dos Santos dos Últimos Dias"
    },
    {
      sector: "Religião",
      subSector: "Igreja Congregacional"
    },
    {
      sector: "Religião",
      subSector: "Igreja Ortodoxa Oriental"
    },
    {
      sector: "Religião",
      subSector: "Igreja Episcopal"
    },
    {
      sector: "Religião",
      subSector: "Igreja Evangélica"
    },
    {
      sector: "Religião",
      subSector: "Igreja do Evangelho Pleno"
    },
    {
      sector: "Religião",
      subSector: "Igreja da Santidade"
    },
    {
      sector: "Religião",
      subSector: "Igreja Independente"
    },
    {
      sector: "Religião",
      subSector: "Igreja Interdenominacional"
    },
    {
      sector: "Religião",
      subSector: "salão do Reino"
    },
    {
      sector: "Religião",
      subSector: "Igreja Luterana"
    },
    {
      sector: "Religião",
      subSector: "Igreja Menonita"
    },
    {
      sector: "Religião",
      subSector: "igreja Metodista"
    },
    {
      sector: "Religião",
      subSector: "Igreja do Nazareno"
    },
    {
      sector: "Religião",
      subSector: "Igreja sem denominação"
    },
    {
      sector: "Religião",
      subSector: "Igreja Pentecostal"
    },
    {
      sector: "Religião",
      subSector: "Igreja Presbiteriana"
    },
    {
      sector: "Religião",
      subSector: "Igreja Adventista do Sétimo Dia"
    },
    {
      sector: "Religião",
      subSector: "Centro religioso"
    },
    {
      sector: "Religião",
      subSector: "Escola religiosa"
    },
    {
      sector: "Religião",
      subSector: "Templo budista"
    },
    {
      sector: "Religião",
      subSector: "Igreja"
    },
    {
      sector: "Religião",
      subSector: "Clero"
    },
    {
      sector: "Religião",
      subSector: "Convento e Mosteiro"
    },
    {
      sector: "Religião",
      subSector: "Templo Hindu"
    },
    {
      sector: "Religião",
      subSector: "Missão"
    },
    {
      sector: "Religião",
      subSector: "Mesquita"
    },
    {
      sector: "Religião",
      subSector: "Livraria Religiosa"
    },
    {
      sector: "Religião",
      subSector: "Templo espírita"
    },
    {
      sector: "Religião",
      subSector: "Centros de cultos afro-brasileiros"
    },
    {
      sector: "Saúde",
      subSector: "Alergista"
    },
    {
      sector: "Saúde",
      subSector: "Coloproctologista"
    },
    {
      sector: "Saúde",
      subSector: "Dermatologista"
    },
    {
      sector: "Saúde",
      subSector: "Médico da família"
    },
    {
      sector: "Saúde",
      subSector: "Clínica ou consultório médico"
    },
    {
      sector: "Saúde",
      subSector: "Medicina Interna"
    },
    {
      sector: "Saúde",
      subSector: "Ginecologista"
    },
    {
      sector: "Saúde",
      subSector: "Oncologista"
    },
    {
      sector: "Saúde",
      subSector: "Oftalmologista"
    },
    {
      sector: "Saúde",
      subSector: "Gastroentereologista"
    },
    {
      sector: "Saúde",
      subSector: "Otorrinolaringologista"
    },
    {
      sector: "Saúde",
      subSector: "Pediatria"
    },
    {
      sector: "Saúde",
      subSector: "Cirurgia plástica"
    },
    {
      sector: "Saúde",
      subSector: "Podologia"
    },
    {
      sector: "Saúde",
      subSector: "Psicólogia"
    },
    {
      sector: "Saúde",
      subSector: "Terapeuta holística"
    },
    {
      sector: "Saúde",
      subSector: "Acupuntura"
    },
    {
      sector: "Saúde",
      subSector: "Reabilitação de adição"
    },
    {
      sector: "Saúde",
      subSector: "Recursos de AIDS"
    },
    {
      sector: "Saúde",
      subSector: "Saúde Alternativa e Holística"
    },
    {
      sector: "Saúde",
      subSector: "Ambulância e resgate"
    },
    {
      sector: "Saúde",
      subSector: "Fonoaudiólogo"
    },
    {
      sector: "Saúde",
      subSector: "Banco de sangue"
    },
    {
      sector: "Saúde",
      subSector: "Terapeuta Ocupacional"
    },
    {
      sector: "Saúde",
      subSector: "Quiroprático"
    },
    {
      sector: "Saúde",
      subSector: "Clínica Psiquiátrica"
    },
    {
      sector: "Saúde",
      subSector: "Dentista"
    },
    {
      sector: "Saúde",
      subSector: "Serviços para pessoas com deficiência"
    },
    {
      sector: "Saúde",
      subSector: "Reabilitação de drogas e álcool"
    },
    {
      sector: "Saúde",
      subSector: "Pronto-socorro"
    },
    {
      sector: "Saúde",
      subSector: "Genealogista"
    },
    {
      sector: "Saúde",
      subSector: "Centro médico e ambulatorial"
    },
    {
      sector: "Saúde",
      subSector: "Equipamentos médicos"
    },
    {
      sector: "Saúde",
      subSector: "Laboratório e exames"
    },
    {
      sector: "Saúde",
      subSector: "Enfermagem"
    },
    {
      sector: "Saúde",
      subSector: "Casa de repouso"
    },
    {
      sector: "Saúde",
      subSector: "Nutricionista"
    },
    {
      sector: "Saúde",
      subSector: "Farmácia"
    },
    {
      sector: "Saúde",
      subSector: "Fisioterapeuta"
    },
    {
      sector: "Saúde",
      subSector: "Fonoaudióloga"
    },
    {
      sector: "Saúde",
      subSector: "Urologista"
    },
    {
      sector: "Saúde",
      subSector: "Equipamento odontológico"
    },
    {
      sector: "Saúde",
      subSector: "Equipamento de laboratório"
    },
    {
      sector: "Saúde",
      subSector: "Equipamento médico"
    },
    {
      sector: "Saúde",
      subSector: "Suprimentos médicos"
    },
    {
      sector: "Saúde",
      subSector: "Serviço de Gravidez e Parto"
    },
    {
      sector: "Saúde e bem-estar",
      subSector: "Aula de primeiros socorros"
    },
    {
      sector: "Saúde e bem-estar",
      subSector: "Instrução Esportiva"
    },
    {
      sector: "Saúde e bem-estar",
      subSector: "Serviços Reprodutivos"
    },
    {
      sector: "Saúde e bem-estar",
      subSector: "Centro Sênior"
    },
    {
      sector: "Serviço Residencial",
      subSector: "Serviço de fossa séptica"
    },
    {
      sector: "Serviço Residencial",
      subSector: "Patrulha e Segurança"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Fornecimento e distribuição de roupas"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Co-working e escritório virtual"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Consultor de negócios"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviço de suprimentos"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviço de limpeza"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviços informáticos"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviço de documentos"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Agência de emprego"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Consultor de sustentabilidade"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviço de franquia"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Provedor de internet"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Material de escritório"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Recrutamento e seleção"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Vendas e serviços de refrigeração"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviço de secretariado"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviço de telemarketing"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Tradutor"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviço de transporte"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Gestão de resíduos"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviço de armazenamento"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviço de máquina de venda automática"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Armazém"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Conservação ambiental"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Equipamento áudio visual"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Contador"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Consultoria tributária"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Controle de pragas"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Segurança no trabalho"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviço Geológico"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Reciclagem e Gestão de Resíduos"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Filtração e Tratamento de Água"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Segurança patrimonial"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviços de fornecimento e distribuição"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Serviços de itens promocionais"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Sala de reuniões"
    },
    {
      sector: "Serviços Empresariais",
      subSector: "Consultor de energia"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Serviço de gestão patrimonial"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Serviços de elevador"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Proteção contra incêndio"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Serviço de gás e química"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Conserto de móveis"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Escavação e Demolição"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Imobiliária"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Imóveis comerciais"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Serviços de Custódia"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Corretor de imóveis"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Avaliador imobiliário"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Incorporador de imóveis"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Condomínio Residencial"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Condomínio Comercial"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Coliving"
    },
    {
      sector: "Serviços Imobiliários",
      subSector: "Escritório corporativo"
    },
    {
      sector: "Serviços Jurídicos",
      subSector: "Falências e Recuperação Judicial"
    },
    {
      sector: "Serviços Jurídicos",
      subSector: "Propriedade intelectual"
    },
    {
      sector: "Serviços Jurídicos",
      subSector: "Direito Empresarial"
    },
    {
      sector: "Serviços Jurídicos",
      subSector: "Direito Criminal"
    },
    {
      sector: "Serviços Jurídicos",
      subSector: "Família e Sucessões"
    },
    {
      sector: "Serviços Jurídicos",
      subSector: "Direito do Trabalho"
    },
    {
      sector: "Serviços Jurídicos",
      subSector: "Direito Imobiliário"
    },
    {
      sector: "Serviços Jurídicos",
      subSector: "Direito Civil"
    },
    {
      sector: "Serviços Jurídicos",
      subSector: "Lei de negligência"
    },
    {
      sector: "Serviços Jurídicos",
      subSector: "Registro de Marcas e Patentes"
    },
    {
      sector: "Serviços Profissionais",
      subSector: "Restauração de arte"
    },
    {
      sector: "Serviços Profissionais",
      subSector: "Sapateiro"
    },
    {
      sector: "Serviços Profissionais",
      subSector: "Costura e Costureira"
    },
    {
      sector: "Serviços Profissionais",
      subSector: "Investigador particular"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Limpador de estofados"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Eletricista"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Lareiras e churrasqueira"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Serviços de porta de garagem"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Jardineiro"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Serviço de vidro"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Limpeza doméstica"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Inspeção residencial"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Serviço de Janelas Domésticas"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Chaveiro"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Empresa de mudança"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Pintor"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Controle de pragas"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Encanador"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Serviço de energia solar"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Armazenagem"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Serviço de estofamento"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Papel de parede"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Babá e cuidados infantil"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Caseiro"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Serviço de zeladoria"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Toldos e Coberturas"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Serviço de cabo e satélite"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Serviço de reparo"
    },
    {
      sector: "Serviços Residenciais",
      subSector: "Serviço de Equipamentos Eletrônicos"
    },
    {
      sector: "Tecnologia",
      subSector: "Robótica"
    },
    {
      sector: "Tecnologia",
      subSector: "Loja de computadores"
    },
    {
      sector: "Tecnologia",
      subSector: "Videogames e jogos"
    },
    {
      sector: "Tecnologia",
      subSector: "Startup"
    },
    {
      sector: "Tecnologia",
      subSector: "Fintech e meios de pagamento"
    },
    {
      sector: "Tecnologia",
      subSector: "Fábrica de Hardware"
    },
    {
      sector: "Tecnologia",
      subSector: "Desenvolvimento de software"
    },
    {
      sector: "Tecnologia",
      subSector: "Serviços na nuvem"
    },
    {
      sector: "Tecnologia",
      subSector: "Software de gestão"
    },
    {
      sector: "Tecnologia",
      subSector: "Aplicativo de serviços"
    },
    {
      sector: "Tecnologia",
      subSector: "Serviços de TI"
    },
    {
      sector: "Tecnologia",
      subSector: "Startup de Impacto"
    },
    {
      sector: "Tecnologia",
      subSector: "Plataforma de Ecommerce"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Equipamento Marítimo"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Estação de serviço marítimo"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Carros blindados"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Ônibus fretados"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Serviço de limusine"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Empresa de ônibus"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Rodoviária"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Condomínio Logístico"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Aluguel de barco"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Aluguel de carros"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Aluguel de motocicletas"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Carga e frete"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Transporte privado"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Transporte público"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Serviços de entrega"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Transporte escolar"
    },
    {
      sector: "Transporte e Logística",
      subSector: "Táxi"
    }
  ]
      return data
}

export function getSectors() {
  const data = [

    "Agricultura e Pecuária",
    "Comunidade agrícola"
    ,

    "Agricultura e Pecuária",
    "Extração de madeira"
    ,

    "Agricultura e Pecuária",
    "Fazenda ou granja"
    ,

    "Agricultura e Pecuária",
    "Pecuarista"
    ,

    "Agricultura e Pecuária",
    "Produtor de flores"
    ,

    "Agricultura e Pecuária",
    "Produtor de orgânicos"
    ,

    "Agricultura e Pecuária",
    "Serviço Agrícola"
    ,

    "Arte e Cultura",
    "Artista e grupo musical"
    ,

    "Arte e Cultura",
    "Ateliê de arte"
    ,

    "Arte e Cultura",
    "Atração turística"
    ,

    "Arte e Cultura",
    "Auditório"
    ,

    "Arte e Cultura",
    "Aulas e Instrução de Música"
    ,

    "Arte e Cultura",
    "Biblioteca"
    ,

    "Arte e Cultura",
    "Centro Comunitário"
    ,

    "Arte e Cultura",
    "Coletivo de arte"
    ,

    "Arte e Cultura",
    "Distribuição de livros e revistas"
    ,

    "Arte e Cultura",
    "Editora"
    ,

    "Arte e Cultura",
    "Galeria de arte"
    ,

    "Arte e Cultura",
    "Instrutor de dança"
    ,

    "Arte e Cultura",
    "Jornal e revista"
    ,

    "Arte e Cultura",
    "Livraria"
    ,

    "Arte e Cultura",
    "Local de apresentação"
    ,

    "Arte e Cultura",
    "Museu"
    ,

    "Arte e Cultura",
    "Museu de Arte"
    ,

    "Arte e Cultura",
    "Museu de Comunicação"
    ,

    "Arte e Cultura",
    "Museu de História"
    ,

    "Arte e Cultura",
    "Orquestra"
    ,

    "Arte e Cultura",
    "Plataforma de notícias"
    ,

    "Arte e Cultura",
    "Produção musical"
    ,

    "Arte e Cultura",
    "Teatro"
    ,

    "Arte e Cultura",
    "Educação em artes cênicas"
    ,

    "Arte e Cultura",
    "Escola de artes"
    ,

    "Automotivo",
    "Aluguel de carros exóticos"
    ,

    "Automotivo",
    "Aluguel de trailer"
    ,

    "Automotivo",
    "Comércio de veículos"
    ,

    "Automotivo",
    "Comércio de veículos recreativos"
    ,

    "Automotivo",
    "Concessionária de carros"
    ,

    "Automotivo",
    "Conserto de motocicletas"
    ,

    "Automotivo",
    "Customização Automotiva"
    ,

    "Automotivo",
    "Despachante automotivo"
    ,

    "Automotivo",
    "Inspeção automotiva"
    ,

    "Automotivo",
    "Lavagem de carros e detalhamento"
    ,

    "Automotivo",
    "Locação de automóveis"
    ,

    "Automotivo",
    "Oficina de mecânica"
    ,

    "Automotivo",
    "Oficina e comércio  de bicietas"
    ,

    "Automotivo",
    "Peças e acessórios automotivos"
    ,

    "Automotivo",
    "Peças e acessórios para carros"
    ,

    "Automotivo",
    "Posto de gasolina"
    ,

    "Automotivo",
    "Reparos automotivos"
    ,

    "Automotivo",
    "Revendedor de pneus"
    ,

    "Automotivo",
    "Serviço de assistência automotiva"
    ,

    "Automotivo",
    "Serviço de lubrificação"
    ,

    "Automotivo",
    "Serviço de reboque"
    ,

    "Bem-estar e Estética",
    "Aromaterapia"
    ,

    "Bem-estar e Estética",
    "Barbearia"
    ,

    "Bem-estar e Estética",
    "Cabeleireiro"
    ,

    "Bem-estar e Estética",
    "Cosméticos e suprimentos de beleza"
    ,

    "Bem-estar e Estética",
    "Cuidados com a pele"
    ,

    "Bem-estar e Estética",
    "Depilação"
    ,

    "Bem-estar e Estética",
    "Depilação à laser"
    ,

    "Bem-estar e Estética",
    "Equipamentos de cabelo e beleza"
    ,

    "Bem-estar e Estética",
    "Estética"
    ,

    "Bem-estar e Estética",
    "Ioga e Pilates"
    ,

    "Bem-estar e Estética",
    "Loja de perucas"
    ,

    "Bem-estar e Estética",
    "Manicure"
    ,

    "Bem-estar e Estética",
    "Maquiador"
    ,

    "Bem-estar e Estética",
    "Massagem"
    ,

    "Bem-estar e Estética",
    "Salão de beleza"
    ,

    "Bem-estar e Estética",
    "Salão de bronzeamento"
    ,

    "Bem-estar e Estética",
    "Spa"
    ,

    "Bem-estar e Estética",
    "Spa diurno"
    ,

    "Bem-estar e Estética",
    "Spa médico"
    ,

    "Bem-estar e Estética",
    "Spa, beleza e cuidados pessoais"
    ,

    "Comércio e Serviços",
    "Acessórios para celular"
    ,

    "Comércio e Serviços",
    "Aluguel de banheiros portáteis"
    ,

    "Comércio e Serviços",
    "Antiguidades e Vintage"
    ,

    "Comércio e Serviços",
    "Artigos para arte e artesanato"
    ,

    "Comércio e Serviços",
    "Caça e Pesca"
    ,

    "Comércio e Serviços",
    "Cama, mesa e banho"
    ,

    "Comércio e Serviços",
    "Centro de compras"
    ,

    "Comércio e Serviços",
    "Centro de jardinagem"
    ,

    "Comércio e Serviços",
    "Comércio de colchões"
    ,

    "Comércio e Serviços",
    "Computadores e eletrônicos"
    ,

    "Comércio e Serviços",
    "Cosméticos e suprimentos de beleza"
    ,

    "Comércio e Serviços",
    "Decoração"
    ,

    "Comércio e Serviços",
    "Distribuição de água"
    ,

    "Comércio e Serviços",
    "Eletrodomésticos"
    ,

    "Comércio e Serviços",
    "Equipamento de rádio e comunicação"
    ,

    "Comércio e Serviços",
    "Estacionamento"
    ,

    "Comércio e Serviços",
    "Farmácia de manipulação"
    ,

    "Comércio e Serviços",
    "Ferragem e materiais de construção"
    ,

    "Comércio e Serviços",
    "Florista"
    ,

    "Comércio e Serviços",
    "Galeria comercial"
    ,

    "Comércio e Serviços",
    "Iluminação"
    ,

    "Comércio e Serviços",
    "Joalheria"
    ,

    "Comércio e Serviços",
    "Lavanderia"
    ,

    "Comércio e Serviços",
    "Leilões"
    ,

    "Comércio e Serviços",
    "Livraria"
    ,

    "Comércio e Serviços",
    "Loja de acessórios"
    ,

    "Comércio e Serviços",
    "Loja de antiguidades"
    ,

    "Comércio e Serviços",
    "Loja de armas"
    ,

    "Comércio e Serviços",
    "Loja de artigos esportivos"
    ,

    "Comércio e Serviços",
    "Loja de atacado e suprimentos"
    ,

    "Comércio e Serviços",
    "Loja de bicicleta"
    ,

    "Comércio e Serviços",
    "Loja de brinquedos"
    ,

    "Comércio e Serviços",
    "Loja de celulares"
    ,

    "Comércio e Serviços",
    "Loja de cinema em casa"
    ,

    "Comércio e Serviços",
    "Loja de colecionáveis"
    ,

    "Comércio e Serviços",
    "Loja de conveniência"
    ,

    "Comércio e Serviços",
    "Loja de departamento"
    ,

    "Comércio e Serviços",
    "Loja de descontos"
    ,

    "Comércio e Serviços",
    "Loja de discos"
    ,

    "Comércio e Serviços",
    "Loja de eletrônicos"
    ,

    "Comércio e Serviços",
    "Loja de equipamentos ao ar livre"
    ,

    "Comércio e Serviços",
    "Loja de fantasias"
    ,

    "Comércio e Serviços",
    "Loja de instrumentos musicais"
    ,

    "Comércio e Serviços",
    "Loja de móveis"
    ,

    "Comércio e Serviços",
    "Loja de noivas"
    ,

    "Comércio e Serviços",
    "Loja de penhores"
    ,

    "Comércio e Serviços",
    "Loja de presentes"
    ,

    "Comércio e Serviços",
    "Loja de presentes culturais"
    ,

    "Comércio e Serviços",
    "Loja de roupas"
    ,

    "Comércio e Serviços",
    "Loja de roupas femininas"
    ,

    "Comércio e Serviços",
    "Loja de roupas infantis"
    ,

    "Comércio e Serviços",
    "Loja de roupas masculinas"
    ,

    "Comércio e Serviços",
    "Loja de sapatos"
    ,

    "Comércio e Serviços",
    "Loja de tapetes e pisos"
    ,

    "Comércio e Serviços",
    "Loja Geek"
    ,

    "Comércio e Serviços",
    "Loja sazonal e pop-up"
    ,

    "Comércio e Serviços",
    "Loja virtual"
    ,

    "Comércio e Serviços",
    "Manutenção de piscinas"
    ,

    "Comércio e Serviços",
    "Material de cozinha"
    ,

    "Comércio e Serviços",
    "Material de escritório"
    ,

    "Comércio e Serviços",
    "Melhoria da casa"
    ,

    "Comércio e Serviços",
    "Mercado"
    ,

    "Comércio e Serviços",
    "Móveis"
    ,

    "Comércio e Serviços",
    "Óptica e relojoaria"
    ,

    "Comércio e Serviços",
    "Outlet"
    ,

    "Comércio e Serviços",
    "Outro"
    ,

    "Comércio e Serviços",
    "Persianas e cortinas"
    ,

    "Comércio e Serviços",
    "Roupa de banho"
    ,

    "Comércio e Serviços",
    "Roupa de esporte"
    ,

    "Comércio e Serviços",
    "Roupa formal"
    ,

    "Comércio e Serviços",
    "Segurança do lar"
    ,

    "Comércio e Serviços",
    "Serviço de bagagem"
    ,

    "Comércio e Serviços",
    "Serviço de esgoto"
    ,

    "Comércio e Serviços",
    "Skate e surf shop"
    ,

    "Comércio e Serviços",
    "Utensílios domésticos"
    ,

    "Comércio e Serviços",
    "Vinícola e vinhedo"
    ,

    "Comunidade e Governo",
    "Adoção e abrigo de animais"
    ,

    "Comunidade e Governo",
    "Casa de recuperação"
    ,

    "Comunidade e Governo",
    "Centro de Formação de Condutores"
    ,

    "Comunidade e Governo",
    "Centro de Prevenção de Crises"
    ,

    "Comunidade e Governo",
    "Consulado e Embaixada"
    ,

    "Comunidade e Governo",
    "Corpo de Bombeiros"
    ,

    "Comunidade e Governo",
    "Correios"
    ,

    "Comunidade e Governo",
    "Delegacia de polícia"
    ,

    "Comunidade e Governo",
    "Habitação e abrigo para sem-teto"
    ,

    "Comunidade e Governo",
    "Instituição de caridade"
    ,

    "Comunidade e Governo",
    "Locais públicos e atrações"
    ,

    "Comunidade e Governo",
    "Lotérica"
    ,

    "Comunidade e Governo",
    "Organização governamental"
    ,

    "Comunidade e Governo",
    "Organização Não-Governamental"
    ,

    "Comunidade e Governo",
    "Parque"
    ,

    "Comunidade e Governo",
    "Prisão e Penitenciária"
    ,

    "Comunidade e Governo",
    "Reciclagem e Gestão de Resíduos"
    ,

    "Comunidade e Governo",
    "Segurança pública"
    ,

    "Comunidade e Governo",
    "Serviço de Assistência à Habitação"
    ,

    "Comunidade e Governo",
    "Serviço de sepultamento e cremação"
    ,

    "Comunidade e Governo",
    "Serviço funerário"
    ,

    "Comunidade e Governo",
    "Serviços de proteção infantil"
    ,

    "Comunidade e Governo",
    "Serviços públicos"
    ,

    "Comunidade e Governo",
    "Serviços sociais"
    ,

    "Comunidade e Governo",
    "Tabelião Público"
    ,

    "Comunidade e Governo",
    "Utilidade pública"
    ,

    "Construção e Arquitetura",
    "Alvenaria e olaria"
    ,

    "Construção e Arquitetura",
    "Arquiteto"
    ,

    "Construção e Arquitetura",
    "Casas móveis"
    ,

    "Construção e Arquitetura",
    "Designer de interiores"
    ,

    "Construção e Arquitetura",
    "Empreiteiro"
    ,

    "Construção e Arquitetura",
    "Equipamentos de construção"
    ,

    "Construção e Arquitetura",
    "Paisagismo"
    ,

    "Construção e Arquitetura",
    "Serviços de construção e reforma"
    ,

    "Construção e Arquitetura",
    "Serviço de Engenharia"
    ,

    "Construção e Arquitetura",
    "Serviço de Pavimentação e Asfalto"
    ,

    "Construção e Arquitetura",
    "Serviço de Perfuração de Poço"
    ,

    "Construção e Arquitetura",
    "Serviço e Fornecimento de Equipamentos"
    ,

    "Design e Moda",
    "Alfaiataria"
    ,

    "Design e Moda",
    "Confecção de vestuário"
    ,

    "Design e Moda",
    "Design de jóias"
    ,

    "Design e Moda",
    "Design de produtos"
    ,

    "Design e Moda",
    "Design gráfico"
    ,

    "Design e Moda",
    "Design de moda"
    ,

    "Design e Moda",
    "Design de móveis"
    ,

    "Educação",
    "Comunidade educacional"
    ,

    "Educação",
    "Consultor educacional"
    ,

    "Educação",
    "Creche e pré-escola"
    ,

    "Educação",
    "Escola"
    ,

    "Educação",
    "Escola de aviação"
    ,

    "Educação",
    "Escola de condução"
    ,

    "Educação",
    "Escola de culinária"
    ,

    "Educação",
    "Escola de idiomas"
    ,

    "Educação",
    "Escola Ensino Fundamental"
    ,

    "Educação",
    "Escola Ensino Médio"
    ,

    "Educação",
    "Escola particular"
    ,

    "Educação",
    "Escola primária"
    ,

    "Educação",
    "Escola pública"
    ,

    "Educação",
    "Faculdade e universidade"
    ,

    "Educação",
    "Instituto técnico"
    ,

    "Educação",
    "Materiais Educacionais"
    ,

    "Educação",
    "Organização educacional"
    ,

    "Educação",
    "Pesquisa educacional"
    ,

    "Educação",
    "Programa de intercâmbio"
    ,

    "Educação",
    "Serviço Educacional"
    ,

    "Educação",
    "Treinamento em Informática"
    ,

    "Educação",
    "Tutoria e ensino particular"
    ,

    "Entretenimento",
    "Aluguel de barco"
    ,

    "Entretenimento",
    "Aluguel de bicicletas"
    ,

    "Entretenimento",
    "Bar"
    ,

    "Entretenimento",
    "Boliche"
    ,

    "Entretenimento",
    "Casa de shows"
    ,

    "Entretenimento",
    "Casa noturna"
    ,

    "Entretenimento",
    "Centro Recreativo"
    ,

    "Entretenimento",
    "Cinema"
    ,

    "Entretenimento",
    "Circo"
    ,

    "Entretenimento",
    "Clube de comédia"
    ,

    "Entretenimento",
    "Clube de dança"
    ,

    "Entretenimento",
    "Clube de jazz"
    ,

    "Entretenimento",
    "Clube recreativo"
    ,

    "Entretenimento",
    "Entretenimento adulto"
    ,

    "Entretenimento",
    "Fliperama"
    ,

    "Entretenimento",
    "Karaokê"
    ,

    "Entretenimento",
    "Lounge"
    ,

    "Entretenimento",
    "Marina"
    ,

    "Entretenimento",
    "Minigolfe"
    ,

    "Entretenimento",
    "Paintball"
    ,

    "Entretenimento",
    "Paraquedismo e esportes aéreos"
    ,

    "Entretenimento",
    "Parque aquático"
    ,

    "Entretenimento",
    "Parque de diversão"
    ,

    "Entretenimento",
    "Pesque-pague"
    ,

    "Entretenimento",
    "Recreação ao ar livre"
    ,

    "Entretenimento",
    "Santuário da Vida Selvagem"
    ,

    "Entretenimento",
    "Sinuca e bilhar"
    ,

    "Entretenimento",
    "Venda de ingressos"
    ,

    "Entretenimento",
    "Zoológico e aquário"
    ,

    "Entretenimento",
    "Tabacaria"
    ,

    "Esporte",
    "Academia"
    ,

    "Esporte",
    "Artes marciais"
    ,

    "Esporte",
    "Autódromo"
    ,

    "Esporte",
    "Balonismo"
    ,

    "Esporte",
    "Beach Tennis"
    ,

    "Esporte",
    "Campo de golfe"
    ,

    "Esporte",
    "Centro de Esportes"
    ,

    "Esporte",
    "Clube social"
    ,

    "Esporte",
    "Escalada"
    ,

    "Esporte",
    "Escola Esportiva"
    ,

    "Esporte",
    "Esportes aquáticos"
    ,

    "Esporte",
    "Kart"
    ,

    "Esporte",
    "Local de esportes e estádio"
    ,

    "Esporte",
    "Mergulho"
    ,

    "Esporte",
    "Mountain Bike"
    ,

    "Esporte",
    "Organização esportiva"
    ,

    "Esporte",
    "Padel e squash"
    ,

    "Esporte",
    "Patinação e skate"
    ,

    "Esporte",
    "Personal trainer"
    ,

    "Esporte",
    "Promotor de esportes"
    ,

    "Esporte",
    "Rafting"
    ,

    "Esporte",
    "Rodeio"
    ,

    "Esporte",
    "Tênis"
    ,

    "Esporte",
    "Tiro com arco"
    ,

    "Estilo de Vida e Bem-Estar",
    "Coaching Pessoal"
    ,

    "Estilo de Vida e Bem-Estar",
    "Escola de surf"
    ,

    "Estilo de Vida e Bem-Estar",
    "Personal Shopper"
    ,

    "Estilo de Vida e Bem-Estar",
    "Serviço de barco"
    ,

    "Estilo de Vida e Bem-Estar",
    "Serviço de relacionamento amoroso"
    ,

    "Estilo de Vida e Bem-Estar",
    "Serviços de estilo de vida"
    ,

    "Estilo de Vida e Bem-Estar",
    "Stand e academia de tiro"
    ,

    "Estilo de Vida e Bem-Estar",
    "Tatuagem e piercing"
    ,

    "Eventos",
    "Acessórios para festa"
    ,

    "Eventos",
    "Animador"
    ,

    "Eventos",
    "Bandas e músicos"
    ,

    "Eventos",
    "Casa de festas"
    ,

    "Eventos",
    "Centro de Convenções"
    ,

    "Eventos",
    "Cerimonialista"
    ,

    "Eventos",
    "DJ"
    ,

    "Eventos",
    "Fornecedor"
    ,

    "Eventos",
    "Local do evento"
    ,

    "Eventos",
    "Organização de feiras e congressos"
    ,

    "Eventos",
    "Planeador de eventos"
    ,

    "Eventos",
    "Plano de casamento"
    ,

    "Eventos",
    "Serviço de barman"
    ,

    "Financeiro",
    "Aconselhamento de Crédito"
    ,

    "Financeiro",
    "Agência de cobrança"
    ,

    "Financeiro",
    "Agente de seguros"
    ,

    "Financeiro",
    "Avaliador"
    ,

    "Financeiro",
    "Câmbio monetário"
    ,

    "Financeiro",
    "Consultoria Financeira"
    ,

    "Financeiro",
    "Corretor de seguros"
    ,

    "Financeiro",
    "Fianças"
    ,

    "Financeiro",
    "Fintech e meios de pagamento"
    ,

    "Financeiro",
    "Investimentos"
    ,

    "Financeiro",
    "Planejamento financeiro"
    ,

    "Financeiro",
    "Planejamento Imobiliário"
    ,

    "Financeiro",
    "Serviço de adiantamento em dinheiro"
    ,

    "Financeiro",
    "Serviços financeiros"
    ,

    "Gastronomia e alimentação",
    "Açaí"
    ,

    "Gastronomia e alimentação",
    "Açougue"
    ,

    "Gastronomia e alimentação",
    "Aula de Culinária"
    ,

    "Gastronomia e alimentação",
    "Bar de esportes"
    ,

    "Gastronomia e alimentação",
    "Bar de vinhos"
    ,

    "Gastronomia e alimentação",
    "Bar e restaurante de tapas"
    ,

    "Gastronomia e alimentação",
    "Barraca de comida"
    ,

    "Gastronomia e alimentação",
    "Brigadeiria"
    ,

    "Gastronomia e alimentação",
    "Cachorro-quente"
    ,

    "Gastronomia e alimentação",
    "Confeitaria e patisserie"
    ,

    "Gastronomia e alimentação",
    "Cafeteria"
    ,

    "Gastronomia e alimentação",
    "Cervejaria e Pub"
    ,

    "Gastronomia e alimentação",
    "Cervejaria"
    ,

    "Gastronomia e alimentação",
    "Churrascaria"
    ,

    "Gastronomia e alimentação",
    "Consultor de alimentos"
    ,

    "Gastronomia e alimentação",
    "Creperia"
    ,

    "Gastronomia e alimentação",
    "Cupcakes e rosquinhas"
    ,

    "Gastronomia e alimentação",
    "Cyber Café"
    ,

    "Gastronomia e alimentação",
    "Dark kitchen"
    ,

    "Gastronomia e alimentação",
    "Delicatessen"
    ,

    "Gastronomia e alimentação",
    "Feira e produtor de orgânicos"
    ,

    "Gastronomia e alimentação",
    "Food-truck e comida de rua"
    ,

    "Gastronomia e alimentação",
    "Hamburgueria"
    ,

    "Gastronomia e alimentação",
    "Loja de bebidas"
    ,

    "Gastronomia e alimentação",
    "Loja de comida saudável"
    ,

    "Gastronomia e alimentação",
    "Loja de conveniência"
    ,

    "Gastronomia e alimentação",
    "Loja de doces"
    ,

    "Gastronomia e alimentação",
    "Loja de frutas e legumes"
    ,

    "Gastronomia e alimentação",
    "Loja de peixe e batatas fritas"
    ,

    "Gastronomia e alimentação",
    "Loja de sanduíches"
    ,

    "Gastronomia e alimentação",
    "Mercado de Agricultores"
    ,

    "Gastronomia e alimentação",
    "Mercearia Especializada"
    ,

    "Gastronomia e alimentação",
    "Mercearia étnica"
    ,

    "Gastronomia e alimentação",
    "Padaria"
    ,

    "Gastronomia e alimentação",
    "Pizzaria"
    ,

    "Gastronomia e Alimentação",
    "Pub e gastropub"
    ,

    "Gastronomia e Alimentação",
    "Restaurante"
    ,

    "Gastronomia e Alimentação",
    "Restaurante afegão"
    ,

    "Gastronomia e Alimentação",
    "Restaurante africano"
    ,

    "Gastronomia e Alimentação",
    "Restaurante alemão"
    ,

    "Gastronomia e Alimentação",
    "Restaurante americano"
    ,

    "Gastronomia e Alimentação",
    "Restaurante argentino"
    ,

    "Gastronomia e Alimentação",
    "Restaurante asiático"
    ,

    "Gastronomia e Alimentação",
    "Restaurante Basco"
    ,

    "Gastronomia e Alimentação",
    "Restaurante belga"
    ,

    "Gastronomia e Alimentação",
    "Restaurante brasileiro"
    ,

    "Gastronomia e Alimentação",
    "Restaurante britânico"
    ,

    "Gastronomia e Alimentação",
    "Restaurante buffet"
    ,

    "Gastronomia e Alimentação",
    "Restaurante cajun e crioulo"
    ,

    "Gastronomia e Alimentação",
    "Restaurante canadense"
    ,

    "Gastronomia e Alimentação",
    "Restaurante Caribenho"
    ,

    "Gastronomia e Alimentação",
    "Restaurante chinês"
    ,

    "Gastronomia e Alimentação",
    "Restaurante coreano"
    ,

    "Gastronomia e Alimentação",
    "Restaurante cubano"
    ,

    "Gastronomia e Alimentação",
    "Restaurante de café da manhã e brunch"
    ,

    "Gastronomia e Alimentação",
    "Restaurante de comida saudável"
    ,

    "Gastronomia e Alimentação",
    "Restaurante de filés"
    ,

    "Gastronomia e Alimentação",
    "Restaurante de fondue"
    ,

    "Gastronomia e Alimentação",
    "Restaurante de frango"
    ,

    "Gastronomia e Alimentação",
    "Restaurante de frutos do mar"
    ,

    "Gastronomia e Alimentação",
    "Restaurante de sobremesas"
    ,

    "Gastronomia e Alimentação",
    "Restaurante Dim Sum"
    ,

    "Gastronomia e Alimentação",
    "Restaurante do Oriente Médio"
    ,

    "Gastronomia e Alimentação",
    "Restaurante do sudoeste"
    ,

    "Gastronomia e Alimentação",
    "Restaurante escandinavo"
    ,

    "Gastronomia e Alimentação",
    "Restaurante espanhol"
    ,

    "Gastronomia e Alimentação",
    "Restaurante etíope"
    ,

    "Gastronomia e Alimentação",
    "Restaurante europeu moderno"
    ,

    "Gastronomia e Alimentação",
    "Restaurante fast food"
    ,

    "Gastronomia e Alimentação",
    "Restaurante francês"
    ,

    "Gastronomia e Alimentação",
    "Restaurante grego"
    ,

    "Gastronomia e Alimentação",
    "Restaurante Halal"
    ,

    "Gastronomia e Alimentação",
    "Restaurante havaiano"
    ,

    "Gastronomia e Alimentação",
    "Restaurante húngaro"
    ,

    "Gastronomia e Alimentação",
    "Restaurante indiano"
    ,

    "Gastronomia e Alimentação",
    "Restaurante indonésio"
    ,

    "Gastronomia e Alimentação",
    "Restaurante internacional"
    ,

    "Gastronomia e Alimentação",
    "Restaurante irlandês"
    ,

    "Gastronomia e Alimentação",
    "Restaurante italiano"
    ,

    "Gastronomia e Alimentação",
    "Restaurante japonês"
    ,

    "Gastronomia e Alimentação",
    "Restaurante Kosher"
    ,

    "Gastronomia e Alimentação",
    "Restaurante latino-americano"
    ,

    "Gastronomia e Alimentação",
    "Restaurante libanês"
    ,

    "Gastronomia e Alimentação",
    "Restaurante marroquino"
    ,

    "Gastronomia e Alimentação",
    "Restaurante mediterrâneo"
    ,

    "Gastronomia e Alimentação",
    "Restaurante mexicano"
    ,

    "Gastronomia e Alimentação",
    "Restaurante paquistanês"
    ,

    "Gastronomia e Alimentação",
    "Restaurante persa"
    ,

    "Gastronomia e Alimentação",
    "Restaurante peruano"
    ,

    "Gastronomia e Alimentação",
    "Restaurante polinésio"
    ,

    "Gastronomia e Alimentação",
    "Restaurante polonês"
    ,

    "Gastronomia e Alimentação",
    "Restaurante português"
    ,

    "Gastronomia e Alimentação",
    "Restaurante requintado"
    ,

    "Gastronomia e Alimentação",
    "Restaurante russo"
    ,

    "Gastronomia e Alimentação",
    "Restaurante sem glúten"
    ,

    "Gastronomia e Alimentação",
    "Restaurante Sopa"
    ,

    "Gastronomia e Alimentação",
    "Restaurante Soul Food"
    ,

    "Gastronomia e Alimentação",
    "Restaurante tailandês"
    ,

    "Gastronomia e Alimentação",
    "Restaurante tarde da noite"
    ,

    "Gastronomia e Alimentação",
    "Restaurante Tex-Mex"
    ,

    "Gastronomia e Alimentação",
    "Restaurante turco"
    ,

    "Gastronomia e Alimentação",
    "Restaurante vegetariano e vegano"
    ,

    "Gastronomia e Alimentação",
    "Serviço e distribuição de alimentos e bebidas"
    ,

    "Gastronomia e Alimentação",
    "Sorveteria e iogurteria"
    ,

    "Gastronomia e Alimentação",
    "Sucos e milkshakes"
    ,

    "Gastronomia e Alimentação",
    "Suprimentos para restaurantes"
    ,

    "Hospitalidade e Turismo",
    "Serviço de hospitalidade"
    ,

    "Hospitalidade e Turismo",
    "Cama e café da manhã"
    ,

    "Hospitalidade e Turismo",
    "Cabine"
    ,

    "Hospitalidade e Turismo",
    "Camping"
    ,

    "Hospitalidade e Turismo",
    "Hostel"
    ,

    "Hospitalidade e Turismo",
    "Hotel"
    ,

    "Hospitalidade e Turismo",
    "Pousada"
    ,

    "Hospitalidade e Turismo",
    "Motel"
    ,

    "Hospitalidade e Turismo",
    "Resort"
    ,

    "Hospitalidade e Turismo",
    "Passeios de barco"
    ,

    "Hospitalidade e Turismo",
    "Serviço de fornecimento de hotel"
    ,

    "Hospitalidade e Turismo",
    "Excursões"
    ,

    "Hospitalidade e Turismo",
    "Passeios ecológicos"
    ,

    "Hospitalidade e Turismo",
    "Companhia de Turismo"
    ,

    "Hospitalidade e Turismo",
    "Guia turístico"
    ,

    "Hospitalidade e Turismo",
    "Informação turística"
    ,

    "Hospitalidade e Turismo",
    "Transporte para o aeroporto"
    ,

    "Hospitalidade e Turismo",
    "Cruzeiro"
    ,

    "Hospitalidade e Turismo",
    "Balsa e Barco"
    ,

    "Hospitalidade e Turismo",
    "Alojamento"
    ,

    "Hospitalidade e Turismo",
    "Serviço de passaporte e visto"
    ,

    "Hospitalidade e Turismo",
    "Passeios turísticos"
    ,

    "Hospitalidade e Turismo",
    "Agência de viagens"
    ,

    "Hospitalidade e Turismo",
    "Hotel Fazenda"
    ,

    "Indústria e Suprimentos",
    "Serviços de automação"
    ,

    "Indústria e Suprimentos",
    "Biotecnologia"
    ,

    "Indústria e Suprimentos",
    "Equipamento Comercial e Industrial"
    ,

    "Indústria e Suprimentos",
    "Fabricação"
    ,

    "Indústria e Suprimentos",
    "Fabricação de colchões"
    ,

    "Indústria e Suprimentos",
    "Metais"
    ,

    "Indústria e Suprimentos",
    "Plásticos"
    ,

    "Indústria e Suprimentos",
    "Refrigeração"
    ,

    "Indústria e Suprimentos",
    "Têxteis"
    ,

    "Indústria e Suprimentos",
    "Carpinteiro"
    ,

    "Indústria e Suprimentos",
    "Condomínio Industrial"
    ,

    "Indústria e Suprimentos",
    "Equipamentos e serviços bancários"
    ,

    "Indústria e Suprimentos",
    "Artigos de borracha"
    ,

    "Indústria e Suprimentos",
    "Produtos Químicos e Gases"
    ,

    "Indústria e Suprimentos",
    "Serviços Petrolíferos"
    ,

    "Indústria e Suprimentos",
    "Equipamentos industriais"
    ,

    "Marketing e Comunicação",
    "Gráfica offset"
    ,

    "Marketing e Comunicação",
    "Serviço de caligrafia"
    ,

    "Marketing e Comunicação",
    "Serviço de Sinalização e Banner"
    ,

    "Marketing e Comunicação",
    "Serviços Artísticos"
    ,

    "Marketing e Comunicação",
    "Transmissão e produção de mídia"
    ,

    "Marketing e Comunicação",
    "Serviço de entretenimento"
    ,

    "Marketing e Comunicação",
    "Consultor de imagens"
    ,

    "Marketing e Comunicação",
    "Consultor de Pesquisa de Mercado"
    ,

    "Marketing e Comunicação",
    "Consultor de marketing"
    ,

    "Marketing e Comunicação",
    "Agência de modelos"
    ,

    "Marketing e Comunicação",
    "Estúdio de Cinema e Televisão"
    ,

    "Marketing e Comunicação",
    "Fotógrafo"
    ,

    "Marketing e Comunicação",
    "Serviços e equipamentos fotográficos"
    ,

    "Marketing e Comunicação",
    "Relações Públicas"
    ,

    "Marketing e Comunicação",
    "Editora"
    ,

    "Marketing e Comunicação",
    "Serigrafia e bordados"
    ,

    "Marketing e Comunicação",
    "Desenvolvimento Web"
    ,

    "Marketing e Comunicação",
    "Agência de marketing digital"
    ,

    "Marketing e Comunicação",
    "Gráfica expressa"
    ,

    "Marketing e Comunicação",
    "Serviço de redação e editorial"
    ,

    "Marketing e Comunicação",
    "Serviço de merchandising"
    ,

    "Marketing e Comunicação",
    "Serviço de pesquisa"
    ,

    "Marketing e Design",
    "Agência de propaganda"
    ,

    "Marketing e Design",
    "Design de Jóias"
    ,

    "Produtos e Serviços para Animais",
    "Taxidermista"
    ,

    "Produtos e Serviços para Animais",
    "Adestramento"
    ,

    "Produtos e Serviços para Animais",
    "Passeador de cães"
    ,

    "Produtos e Serviços para Animais",
    "Cavalos"
    ,

    "Produtos e Serviços para Animais",
    "Canil"
    ,

    "Produtos e Serviços para Animais",
    "Criador de animais de estimação"
    ,

    "Produtos e Serviços para Animais",
    "Cemitério de Animais de Estimação"
    ,

    "Produtos e Serviços para Animais",
    "Escova de um animal de estimação"
    ,

    "Produtos e Serviços para Animais",
    "Babá de animais"
    ,

    "Produtos e Serviços para Animais",
    "Pet Shop"
    ,

    "Produtos e Serviços para Animais",
    "Veterinário"
    ,

    "Produtos e Serviços para Animais",
    "Serviço de animais de estimação"
    ,

    "Religião",
    "Igreja Episcopal Metodista Africana"
    ,

    "Religião",
    "Igreja Anglicana"
    ,

    "Religião",
    "Igreja Apostólica"
    ,

    "Religião",
    "Assembleia de Deus"
    ,

    "Religião",
    "Igreja Batista"
    ,

    "Religião",
    "Igreja Católica"
    ,

    "Religião",
    "Igreja Carismática"
    ,

    "Religião",
    "Igreja cristã"
    ,

    "Religião",
    "Igreja da Ciência Cristã"
    ,

    "Religião",
    "Igreja de Cristo"
    ,

    "Religião",
    "Igreja de Deus"
    ,

    "Religião",
    "Igreja de Jesus Cristo dos Santos dos Últimos Dias"
    ,

    "Religião",
    "Igreja Congregacional"
    ,

    "Religião",
    "Igreja Ortodoxa Oriental"
    ,

    "Religião",
    "Igreja Episcopal"
    ,

    "Religião",
    "Igreja Evangélica"
    ,

    "Religião",
    "Igreja do Evangelho Pleno"
    ,

    "Religião",
    "Igreja da Santidade"
    ,

    "Religião",
    "Igreja Independente"
    ,

    "Religião",
    "Igreja Interdenominacional"
    ,

    "Religião",
    "salão do Reino"
    ,

    "Religião",
    "Igreja Luterana"
    ,

    "Religião",
    "Igreja Menonita"
    ,

    "Religião",
    "igreja Metodista"
    ,

    "Religião",
    "Igreja do Nazareno"
    ,

    "Religião",
    "Igreja sem denominação"
    ,

    "Religião",
    "Igreja Pentecostal"
    ,

    "Religião",
    "Igreja Presbiteriana"
    ,

    "Religião",
    "Igreja Adventista do Sétimo Dia"
    ,

    "Religião",
    "Centro religioso"
    ,

    "Religião",
    "Escola religiosa"
    ,

    "Religião",
    "Templo budista"
    ,

    "Religião",
    "Igreja"
    ,

    "Religião",
    "Clero"
    ,

    "Religião",
    "Convento e Mosteiro"
    ,

    "Religião",
    "Templo Hindu"
    ,

    "Religião",
    "Missão"
    ,

    "Religião",
    "Mesquita"
    ,

    "Religião",
    "Livraria Religiosa"
    ,

    "Religião",
    "Templo espírita"
    ,

    "Religião",
    "Centros de cultos afro-brasileiros"
    ,

    "Saúde",
    "Alergista"
    ,

    "Saúde",
    "Coloproctologista"
    ,

    "Saúde",
    "Dermatologista"
    ,

    "Saúde",
    "Médico da família"
    ,

    "Saúde",
    "Clínica ou consultório médico"
    ,

    "Saúde",
    "Medicina Interna"
    ,

    "Saúde",
    "Ginecologista"
    ,

    "Saúde",
    "Oncologista"
    ,

    "Saúde",
    "Oftalmologista"
    ,

    "Saúde",
    "Gastroentereologista"
    ,

    "Saúde",
    "Otorrinolaringologista"
    ,

    "Saúde",
    "Pediatria"
    ,

    "Saúde",
    "Cirurgia plástica"
    ,

    "Saúde",
    "Podologia"
    ,

    "Saúde",
    "Psicólogia"
    ,

    "Saúde",
    "Terapeuta holística"
    ,

    "Saúde",
    "Acupuntura"
    ,

    "Saúde",
    "Reabilitação de adição"
    ,

    "Saúde",
    "Recursos de AIDS"
    ,

    "Saúde",
    "Saúde Alternativa e Holística"
    ,

    "Saúde",
    "Ambulância e resgate"
    ,

    "Saúde",
    "Fonoaudiólogo"
    ,

    "Saúde",
    "Banco de sangue"
    ,

    "Saúde",
    "Terapeuta Ocupacional"
    ,

    "Saúde",
    "Quiroprático"
    ,

    "Saúde",
    "Clínica Psiquiátrica"
    ,

    "Saúde",
    "Dentista"
    ,

    "Saúde",
    "Serviços para pessoas com deficiência"
    ,

    "Saúde",
    "Reabilitação de drogas e álcool"
    ,

    "Saúde",
    "Pronto-socorro"
    ,

    "Saúde",
    "Genealogista"
    ,

    "Saúde",
    "Centro médico e ambulatorial"
    ,

    "Saúde",
    "Equipamentos médicos"
    ,

    "Saúde",
    "Laboratório e exames"
    ,

    "Saúde",
    "Enfermagem"
    ,

    "Saúde",
    "Casa de repouso"
    ,

    "Saúde",
    "Nutricionista"
    ,

    "Saúde",
    "Farmácia"
    ,

    "Saúde",
    "Fisioterapeuta"
    ,

    "Saúde",
    "Fonoaudióloga"
    ,

    "Saúde",
    "Urologista"
    ,

    "Saúde",
    "Equipamento odontológico"
    ,

    "Saúde",
    "Equipamento de laboratório"
    ,

    "Saúde",
    "Equipamento médico"
    ,

    "Saúde",
    "Suprimentos médicos"
    ,

    "Saúde",
    "Serviço de Gravidez e Parto"
    ,

    "Saúde e bem-estar",
    "Aula de primeiros socorros"
    ,

    "Saúde e bem-estar",
    "Instrução Esportiva"
    ,

    "Saúde e bem-estar",
    "Serviços Reprodutivos"
    ,

    "Saúde e bem-estar",
    "Centro Sênior"
    ,

    "Serviço Residencial",
    "Serviço de fossa séptica"
    ,

    "Serviço Residencial",
    "Patrulha e Segurança"
    ,

    "Serviços Empresariais",
    "Fornecimento e distribuição de roupas"
    ,

    "Serviços Empresariais",
    "Co-working e escritório virtual"
    ,

    "Serviços Empresariais",
    "Consultor de negócios"
    ,

    "Serviços Empresariais",
    "Serviço de suprimentos"
    ,

    "Serviços Empresariais",
    "Serviço de limpeza"
    ,

    "Serviços Empresariais",
    "Serviços informáticos"
    ,

    "Serviços Empresariais",
    "Serviço de documentos"
    ,

    "Serviços Empresariais",
    "Agência de emprego"
    ,

    "Serviços Empresariais",
    "Consultor de sustentabilidade"
    ,

    "Serviços Empresariais",
    "Serviço de franquia"
    ,

    "Serviços Empresariais",
    "Provedor de internet"
    ,

    "Serviços Empresariais",
    "Material de escritório"
    ,

    "Serviços Empresariais",
    "Recrutamento e seleção"
    ,

    "Serviços Empresariais",
    "Vendas e serviços de refrigeração"
    ,

    "Serviços Empresariais",
    "Serviço de secretariado"
    ,

    "Serviços Empresariais",
    "Serviço de telemarketing"
    ,

    "Serviços Empresariais",
    "Tradutor"
    ,

    "Serviços Empresariais",
    "Serviço de transporte"
    ,

    "Serviços Empresariais",
    "Gestão de resíduos"
    ,

    "Serviços Empresariais",
    "Serviço de armazenamento"
    ,

    "Serviços Empresariais",
    "Serviço de máquina de venda automática"
    ,

    "Serviços Empresariais",
    "Armazém"
    ,

    "Serviços Empresariais",
    "Conservação ambiental"
    ,

    "Serviços Empresariais",
    "Equipamento áudio visual"
    ,

    "Serviços Empresariais",
    "Contador"
    ,

    "Serviços Empresariais",
    "Consultoria tributária"
    ,

    "Serviços Empresariais",
    "Controle de pragas"
    ,

    "Serviços Empresariais",
    "Segurança no trabalho"
    ,

    "Serviços Empresariais",
    "Serviço Geológico"
    ,

    "Serviços Empresariais",
    "Reciclagem e Gestão de Resíduos"
    ,

    "Serviços Empresariais",
    "Filtração e Tratamento de Água"
    ,

    "Serviços Empresariais",
    "Segurança patrimonial"
    ,

    "Serviços Empresariais",
    "Serviços de fornecimento e distribuição"
    ,

    "Serviços Empresariais",
    "Serviços de itens promocionais"
    ,

    "Serviços Empresariais",
    "Sala de reuniões"
    ,

    "Serviços Empresariais",
    "Consultor de energia"
    ,

    "Serviços Imobiliários",
    "Serviço de gestão patrimonial"
    ,

    "Serviços Imobiliários",
    "Serviços de elevador"
    ,

    "Serviços Imobiliários",
    "Proteção contra incêndio"
    ,

    "Serviços Imobiliários",
    "Serviço de gás e química"
    ,

    "Serviços Imobiliários",
    "Conserto de móveis"
    ,

    "Serviços Imobiliários",
    "Escavação e Demolição"
    ,

    "Serviços Imobiliários",
    "Imobiliária"
    ,

    "Serviços Imobiliários",
    "Imóveis comerciais"
    ,

    "Serviços Imobiliários",
    "Serviços de Custódia"
    ,

    "Serviços Imobiliários",
    "Corretor de imóveis"
    ,

    "Serviços Imobiliários",
    "Avaliador imobiliário"
    ,

    "Serviços Imobiliários",
    "Incorporador de imóveis"
    ,

    "Serviços Imobiliários",
    "Condomínio Residencial"
    ,

    "Serviços Imobiliários",
    "Condomínio Comercial"
    ,

    "Serviços Imobiliários",
    "Coliving"
    ,

    "Serviços Imobiliários",
    "Escritório corporativo"
    ,

    "Serviços Jurídicos",
    "Falências e Recuperação Judicial"
    ,

    "Serviços Jurídicos",
    "Propriedade intelectual"
    ,

    "Serviços Jurídicos",
    "Direito Empresarial"
    ,

    "Serviços Jurídicos",
    "Direito Criminal"
    ,

    "Serviços Jurídicos",
    "Família e Sucessões"
    ,

    "Serviços Jurídicos",
    "Direito do Trabalho"
    ,

    "Serviços Jurídicos",
    "Direito Imobiliário"
    ,

    "Serviços Jurídicos",
    "Direito Civil"
    ,

    "Serviços Jurídicos",
    "Lei de negligência"
    ,

    "Serviços Jurídicos",
    "Registro de Marcas e Patentes"
    ,

    "Serviços Profissionais",
    "Restauração de arte"
    ,

    "Serviços Profissionais",
    "Sapateiro"
    ,

    "Serviços Profissionais",
    "Costura e Costureira"
    ,

    "Serviços Profissionais",
    "Investigador particular"
    ,

    "Serviços Residenciais",
    "Limpador de estofados"
    ,

    "Serviços Residenciais",
    "Eletricista"
    ,

    "Serviços Residenciais",
    "Lareiras e churrasqueira"
    ,

    "Serviços Residenciais",
    "Serviços de porta de garagem"
    ,

    "Serviços Residenciais",
    "Jardineiro"
    ,

    "Serviços Residenciais",
    "Serviço de vidro"
    ,

    "Serviços Residenciais",
    "Limpeza doméstica"
    ,

    "Serviços Residenciais",
    "Inspeção residencial"
    ,

    "Serviços Residenciais",
    "Serviço de Janelas Domésticas"
    ,

    "Serviços Residenciais",
    "Chaveiro"
    ,

    "Serviços Residenciais",
    "Empresa de mudança"
    ,

    "Serviços Residenciais",
    "Pintor"
    ,

    "Serviços Residenciais",
    "Controle de pragas"
    ,

    "Serviços Residenciais",
    "Encanador"
    ,

    "Serviços Residenciais",
    "Serviço de energia solar"
    ,

    "Serviços Residenciais",
    "Armazenagem"
    ,

    "Serviços Residenciais",
    "Serviço de estofamento"
    ,

    "Serviços Residenciais",
    "Papel de parede"
    ,

    "Serviços Residenciais",
    "Babá e cuidados infantil"
    ,

    "Serviços Residenciais",
    "Caseiro"
    ,

    "Serviços Residenciais",
    "Serviço de zeladoria"
    ,

    "Serviços Residenciais",
    "Toldos e Coberturas"
    ,

    "Serviços Residenciais",
    "Serviço de cabo e satélite"
    ,

    "Serviços Residenciais",
    "Serviço de reparo"
    ,

    "Serviços Residenciais",
    "Serviço de Equipamentos Eletrônicos"
    ,

    "Tecnologia",
    "Robótica"
    ,

    "Tecnologia",
    "Loja de computadores"
    ,

    "Tecnologia",
    "Videogames e jogos"
    ,

    "Tecnologia",
    "Startup"
    ,

    "Tecnologia",
    "Fintech e meios de pagamento"
    ,

    "Tecnologia",
    "Fábrica de Hardware"
    ,

    "Tecnologia",
    "Desenvolvimento de software"
    ,

    "Tecnologia",
    "Serviços na nuvem"
    ,

    "Tecnologia",
    "Software de gestão"
    ,

    "Tecnologia",
    "Aplicativo de serviços"
    ,

    "Tecnologia",
    "Serviços de TI"
    ,

    "Tecnologia",
    "Startup de Impacto"
    ,

    "Tecnologia",
    "Plataforma de Ecommerce"
    ,

    "Transporte e Logística",
    "Equipamento Marítimo"
    ,

    "Transporte e Logística",
    "Estação de serviço marítimo"
    ,

    "Transporte e Logística",
    "Carros blindados"
    ,

    "Transporte e Logística",
    "Ônibus fretados"
    ,

    "Transporte e Logística",
    "Serviço de limusine"
    ,

    "Transporte e Logística",
    "Empresa de ônibus"
    ,

    "Transporte e Logística",
    "Rodoviária"
    ,

    "Transporte e Logística",
    "Condomínio Logístico"
    ,

    "Transporte e Logística",
    "Aluguel de barco"
    ,

    "Transporte e Logística",
    "Aluguel de carros"
    ,

    "Transporte e Logística",
    "Aluguel de motocicletas"
    ,

    "Transporte e Logística",
    "Carga e frete"
    ,

    "Transporte e Logística",
    "Transporte privado"
    ,

    "Transporte e Logística",
    "Transporte público"
    ,

    "Transporte e Logística",
    "Serviços de entrega"
    ,

    "Transporte e Logística",
    "Transporte escolar"
    ,

    "Transporte e Logística",
    "Táxi"
  ]
  return data
}