package main

import "fmt"

func main() {
	// Pede para o usuário digitar o nome
	fmt.Print("Digite seu nome: ") // Print não quebra a linha automaticamente

	// Variável para armazenar o nome
	var nome string

	// Lê o que o usuário digitou até apertar Enter
	fmt.Scanln(&nome)

	// Responde com uma saudação personalizada
	fmt.Println("Olá,", nome, "🚀 Bem-vindo ao Go!")

	// Espera o usuário apertar Enter para sair
	var input string
	fmt.Println("Pressione Enter para sair...")
	fmt.Scanln(&input)
}
