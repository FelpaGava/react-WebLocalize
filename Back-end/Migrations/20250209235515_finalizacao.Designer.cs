﻿// <auto-generated />
using API_Teste.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API_Teste.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250209235515_finalizacao")]
    partial class finalizacao
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("API_Teste.Model.CidadesModel", b =>
                {
                    b.Property<int>("CidadeID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CidadeID"));

                    b.Property<int>("EstadoID")
                        .HasColumnType("int");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CidadeID");

                    b.HasIndex("EstadoID");

                    b.ToTable("Cidades");

                    b.HasData(
                        new
                        {
                            CidadeID = 1,
                            EstadoID = 25,
                            Nome = "Tupã"
                        },
                        new
                        {
                            CidadeID = 2,
                            EstadoID = 25,
                            Nome = "Marília"
                        },
                        new
                        {
                            CidadeID = 3,
                            EstadoID = 25,
                            Nome = "Vera Cruz"
                        },
                        new
                        {
                            CidadeID = 4,
                            EstadoID = 25,
                            Nome = "Pompeia"
                        },
                        new
                        {
                            CidadeID = 5,
                            EstadoID = 25,
                            Nome = "Ocauçu"
                        },
                        new
                        {
                            CidadeID = 6,
                            EstadoID = 25,
                            Nome = "Júlio Mesquita"
                        },
                        new
                        {
                            CidadeID = 7,
                            EstadoID = 25,
                            Nome = "Lupércio"
                        },
                        new
                        {
                            CidadeID = 8,
                            EstadoID = 25,
                            Nome = "Alvinlândia"
                        },
                        new
                        {
                            CidadeID = 9,
                            EstadoID = 25,
                            Nome = "Guaimbê"
                        },
                        new
                        {
                            CidadeID = 10,
                            EstadoID = 25,
                            Nome = "Echaporã"
                        },
                        new
                        {
                            CidadeID = 11,
                            EstadoID = 25,
                            Nome = "Oscar Bressane"
                        },
                        new
                        {
                            CidadeID = 12,
                            EstadoID = 25,
                            Nome = "Queiroz"
                        },
                        new
                        {
                            CidadeID = 13,
                            EstadoID = 25,
                            Nome = "Borá"
                        },
                        new
                        {
                            CidadeID = 14,
                            EstadoID = 25,
                            Nome = "Cândido Mota"
                        },
                        new
                        {
                            CidadeID = 15,
                            EstadoID = 25,
                            Nome = "Paraguaçu Paulista"
                        },
                        new
                        {
                            CidadeID = 16,
                            EstadoID = 5,
                            Nome = "Salvador"
                        },
                        new
                        {
                            CidadeID = 17,
                            EstadoID = 5,
                            Nome = "Feira de Santana"
                        },
                        new
                        {
                            CidadeID = 18,
                            EstadoID = 5,
                            Nome = "Vitória da Conquista"
                        },
                        new
                        {
                            CidadeID = 19,
                            EstadoID = 5,
                            Nome = "Camaçari"
                        },
                        new
                        {
                            CidadeID = 20,
                            EstadoID = 5,
                            Nome = "Itabuna"
                        },
                        new
                        {
                            CidadeID = 21,
                            EstadoID = 13,
                            Nome = "Belo Horizonte"
                        },
                        new
                        {
                            CidadeID = 22,
                            EstadoID = 13,
                            Nome = "Uberlândia"
                        },
                        new
                        {
                            CidadeID = 23,
                            EstadoID = 13,
                            Nome = "Contagem"
                        },
                        new
                        {
                            CidadeID = 24,
                            EstadoID = 13,
                            Nome = "Juiz de Fora"
                        },
                        new
                        {
                            CidadeID = 25,
                            EstadoID = 13,
                            Nome = "Betim"
                        },
                        new
                        {
                            CidadeID = 26,
                            EstadoID = 16,
                            Nome = "Curitiba"
                        },
                        new
                        {
                            CidadeID = 27,
                            EstadoID = 16,
                            Nome = "Londrina"
                        },
                        new
                        {
                            CidadeID = 28,
                            EstadoID = 16,
                            Nome = "Maringá"
                        },
                        new
                        {
                            CidadeID = 29,
                            EstadoID = 16,
                            Nome = "Ponta Grossa"
                        },
                        new
                        {
                            CidadeID = 30,
                            EstadoID = 16,
                            Nome = "Cascavel"
                        },
                        new
                        {
                            CidadeID = 31,
                            EstadoID = 21,
                            Nome = "Porto Alegre"
                        },
                        new
                        {
                            CidadeID = 32,
                            EstadoID = 21,
                            Nome = "Caxias do Sul"
                        },
                        new
                        {
                            CidadeID = 33,
                            EstadoID = 21,
                            Nome = "Pelotas"
                        },
                        new
                        {
                            CidadeID = 34,
                            EstadoID = 21,
                            Nome = "Santa Maria"
                        },
                        new
                        {
                            CidadeID = 35,
                            EstadoID = 21,
                            Nome = "Canoas"
                        },
                        new
                        {
                            CidadeID = 36,
                            EstadoID = 6,
                            Nome = "Fortaleza"
                        },
                        new
                        {
                            CidadeID = 37,
                            EstadoID = 6,
                            Nome = "Caucaia"
                        },
                        new
                        {
                            CidadeID = 38,
                            EstadoID = 6,
                            Nome = "Juazeiro do Norte"
                        },
                        new
                        {
                            CidadeID = 39,
                            EstadoID = 6,
                            Nome = "Maracanaú"
                        },
                        new
                        {
                            CidadeID = 40,
                            EstadoID = 6,
                            Nome = "Sobral"
                        },
                        new
                        {
                            CidadeID = 41,
                            EstadoID = 17,
                            Nome = "Recife"
                        },
                        new
                        {
                            CidadeID = 42,
                            EstadoID = 17,
                            Nome = "Jaboatão dos Guararapes"
                        },
                        new
                        {
                            CidadeID = 43,
                            EstadoID = 17,
                            Nome = "Olinda"
                        },
                        new
                        {
                            CidadeID = 44,
                            EstadoID = 17,
                            Nome = "Caruaru"
                        },
                        new
                        {
                            CidadeID = 45,
                            EstadoID = 17,
                            Nome = "Petrolina"
                        });
                });

            modelBuilder.Entity("API_Teste.Model.EstadosModel", b =>
                {
                    b.Property<int>("EstadoID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EstadoID"));

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sigla")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("EstadoID");

                    b.ToTable("Estados");

                    b.HasData(
                        new
                        {
                            EstadoID = 1,
                            Nome = "Acre",
                            Sigla = "AC"
                        },
                        new
                        {
                            EstadoID = 2,
                            Nome = "Alagoas",
                            Sigla = "AL"
                        },
                        new
                        {
                            EstadoID = 3,
                            Nome = "Amapá",
                            Sigla = "AP"
                        },
                        new
                        {
                            EstadoID = 4,
                            Nome = "Amazonas",
                            Sigla = "AM"
                        },
                        new
                        {
                            EstadoID = 5,
                            Nome = "Bahia",
                            Sigla = "BA"
                        },
                        new
                        {
                            EstadoID = 6,
                            Nome = "Ceará",
                            Sigla = "CE"
                        },
                        new
                        {
                            EstadoID = 7,
                            Nome = "Distrito Federal",
                            Sigla = "DF"
                        },
                        new
                        {
                            EstadoID = 8,
                            Nome = "Espírito Santo",
                            Sigla = "ES"
                        },
                        new
                        {
                            EstadoID = 9,
                            Nome = "Goiás",
                            Sigla = "GO"
                        },
                        new
                        {
                            EstadoID = 10,
                            Nome = "Maranhão",
                            Sigla = "MA"
                        },
                        new
                        {
                            EstadoID = 11,
                            Nome = "Mato Grosso",
                            Sigla = "MT"
                        },
                        new
                        {
                            EstadoID = 12,
                            Nome = "Mato Grosso do Sul",
                            Sigla = "MS"
                        },
                        new
                        {
                            EstadoID = 13,
                            Nome = "Minas Gerais",
                            Sigla = "MG"
                        },
                        new
                        {
                            EstadoID = 14,
                            Nome = "Pará",
                            Sigla = "PA"
                        },
                        new
                        {
                            EstadoID = 15,
                            Nome = "Paraíba",
                            Sigla = "PB"
                        },
                        new
                        {
                            EstadoID = 16,
                            Nome = "Paraná",
                            Sigla = "PR"
                        },
                        new
                        {
                            EstadoID = 17,
                            Nome = "Pernambuco",
                            Sigla = "PE"
                        },
                        new
                        {
                            EstadoID = 18,
                            Nome = "Piauí",
                            Sigla = "PI"
                        },
                        new
                        {
                            EstadoID = 19,
                            Nome = "Rio de Janeiro",
                            Sigla = "RJ"
                        },
                        new
                        {
                            EstadoID = 20,
                            Nome = "Rio Grande do Norte",
                            Sigla = "RN"
                        },
                        new
                        {
                            EstadoID = 21,
                            Nome = "Rio Grande do Sul",
                            Sigla = "RS"
                        },
                        new
                        {
                            EstadoID = 22,
                            Nome = "Rondônia",
                            Sigla = "RO"
                        },
                        new
                        {
                            EstadoID = 23,
                            Nome = "Roraima",
                            Sigla = "RR"
                        },
                        new
                        {
                            EstadoID = 24,
                            Nome = "Santa Catarina",
                            Sigla = "SC"
                        },
                        new
                        {
                            EstadoID = 25,
                            Nome = "São Paulo",
                            Sigla = "SP"
                        },
                        new
                        {
                            EstadoID = 26,
                            Nome = "Sergipe",
                            Sigla = "SE"
                        },
                        new
                        {
                            EstadoID = 27,
                            Nome = "Tocantins",
                            Sigla = "TO"
                        });
                });

            modelBuilder.Entity("LocaisModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CidadeID")
                        .HasColumnType("int");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Endereco")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("EstadoID")
                        .HasColumnType("int");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.HasIndex("CidadeID");

                    b.HasIndex("EstadoID");

                    b.ToTable("Locais");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CidadeID = 2,
                            Descricao = "Igreja histórica com bela arquitetura",
                            Endereco = "Praça Dr. Nemezio V. Souza, 50 - Centro, Marília - SP",
                            EstadoID = 25,
                            Nome = "Basílica de São Bento"
                        },
                        new
                        {
                            Id = 2,
                            CidadeID = 2,
                            Descricao = "Área verde para caminhadas e lazer",
                            Endereco = "Av. República, 1500 - Bosque, Marília - SP",
                            EstadoID = 25,
                            Nome = "Bosque Municipal"
                        },
                        new
                        {
                            Id = 3,
                            CidadeID = 2,
                            Descricao = "Museu com fósseis e exposições históricas",
                            Endereco = "Rua São Paulo, 255 - Centro, Marília - SP",
                            EstadoID = 25,
                            Nome = "Museu de Paleontologia"
                        },
                        new
                        {
                            Id = 4,
                            CidadeID = 1,
                            Descricao = "Ótimo para caminhadas e lazer ao ar livre",
                            Endereco = "Rua Comendador José G. dos Santos, s/n - Centro, Tupã - SP",
                            EstadoID = 25,
                            Nome = "Parque do Povo"
                        },
                        new
                        {
                            Id = 5,
                            CidadeID = 1,
                            Descricao = "Centro cultural com exposições sobre a história indígena",
                            Endereco = "Rua Tupi, 1825 - Centro, Tupã - SP",
                            EstadoID = 25,
                            Nome = "Museu Índia Vanuíre"
                        },
                        new
                        {
                            Id = 6,
                            CidadeID = 16,
                            Descricao = "Centro histórico de Salvador",
                            Endereco = "Praça Terreiro de Jesus, s/n - Pelourinho, Salvador - BA",
                            EstadoID = 5,
                            Nome = "Pelourinho"
                        },
                        new
                        {
                            Id = 7,
                            CidadeID = 16,
                            Descricao = "Um dos cartões postais da Bahia",
                            Endereco = "Avenida Oceanica, s/n - Barra, Salvador - BA",
                            EstadoID = 5,
                            Nome = "Farol da Barra"
                        },
                        new
                        {
                            Id = 8,
                            CidadeID = 17,
                            Descricao = "Destino turístico famoso na Bahia",
                            Endereco = "Rua do Farol, 100 - Praia do Forte, Mata de São João - BA",
                            EstadoID = 5,
                            Nome = "Praia do Forte"
                        },
                        new
                        {
                            Id = 9,
                            CidadeID = 21,
                            Descricao = "Ponto histórico e cultural",
                            Endereco = "Praça da Liberdade, s/n - Liberdade, Belo Horizonte - MG",
                            EstadoID = 13,
                            Nome = "Praça da Liberdade"
                        },
                        new
                        {
                            Id = 10,
                            CidadeID = 22,
                            Descricao = "Cidade histórica famosa",
                            Endereco = "Praça Tiradentes, s/n - Centro, Ouro Preto - MG",
                            EstadoID = 13,
                            Nome = "Ouro Preto"
                        },
                        new
                        {
                            Id = 11,
                            CidadeID = 26,
                            Descricao = "Um dos principais pontos turísticos de Curitiba",
                            Endereco = "Rua Engenheiro Ostoja Roguski, 100 - Jardim Botânico, Curitiba - PR",
                            EstadoID = 16,
                            Nome = "Jardim Botânico"
                        },
                        new
                        {
                            Id = 12,
                            CidadeID = 26,
                            Descricao = "Teatro em meio à natureza",
                            Endereco = "Avenida João Gualberto, 550 - Abranches, Curitiba - PR",
                            EstadoID = 16,
                            Nome = "Ópera de Arame"
                        },
                        new
                        {
                            Id = 13,
                            CidadeID = 31,
                            Descricao = "Ótimo para lazer e piqueniques",
                            Endereco = "Parque da Redenção, s/n - Farroupilha, Porto Alegre - RS",
                            EstadoID = 21,
                            Nome = "Parque da Redenção"
                        },
                        new
                        {
                            Id = 14,
                            CidadeID = 32,
                            Descricao = "Cidade turística com forte influência europeia",
                            Endereco = "Rua São Pedro, 225 - Centro, Gramado - RS",
                            EstadoID = 21,
                            Nome = "Gramado"
                        },
                        new
                        {
                            Id = 15,
                            CidadeID = 36,
                            Descricao = "Uma das praias mais bonitas do Brasil",
                            Endereco = "Rua do Forró, s/n - Jericoacoara, Jericoacoara - CE",
                            EstadoID = 6,
                            Nome = "Praia de Jericoacoara"
                        },
                        new
                        {
                            Id = 16,
                            CidadeID = 36,
                            Descricao = "Ponto turístico famoso",
                            Endereco = "Avenida Beira Mar, s/n - Meireles, Fortaleza - CE",
                            EstadoID = 6,
                            Nome = "Beira Mar de Fortaleza"
                        },
                        new
                        {
                            Id = 17,
                            CidadeID = 41,
                            Descricao = "Praia paradisíaca",
                            Endereco = "Rua Beira Mar, s/n - Porto de Galinhas, Ipojuca - PE",
                            EstadoID = 17,
                            Nome = "Porto de Galinhas"
                        },
                        new
                        {
                            Id = 18,
                            CidadeID = 41,
                            Descricao = "Local histórico no Recife Antigo",
                            Endereco = "Praça do Marco Zero, s/n - Recife Antigo, Recife - PE",
                            EstadoID = 17,
                            Nome = "Marco Zero"
                        });
                });

            modelBuilder.Entity("API_Teste.Model.CidadesModel", b =>
                {
                    b.HasOne("API_Teste.Model.EstadosModel", "EstadoRelacao")
                        .WithMany("Cidades")
                        .HasForeignKey("EstadoID")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("EstadoRelacao");
                });

            modelBuilder.Entity("LocaisModel", b =>
                {
                    b.HasOne("API_Teste.Model.CidadesModel", "CidadeRelacao")
                        .WithMany()
                        .HasForeignKey("CidadeID")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("API_Teste.Model.EstadosModel", "EstadoRelacao")
                        .WithMany()
                        .HasForeignKey("EstadoID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("CidadeRelacao");

                    b.Navigation("EstadoRelacao");
                });

            modelBuilder.Entity("API_Teste.Model.EstadosModel", b =>
                {
                    b.Navigation("Cidades");
                });
#pragma warning restore 612, 618
        }
    }
}
