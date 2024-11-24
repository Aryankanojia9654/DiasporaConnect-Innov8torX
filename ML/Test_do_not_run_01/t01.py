import pygame
import random

# Initialize Pygame
pygame.init()

# Set up some constants
WIDTH, HEIGHT = 800, 600
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Create a window
screen = pygame.display.set_mode((WIDTH, HEIGHT))

class NPC:
    def __init__(self):
        self.name = "My Wife"
        self.health = 1000
        self.xp = 0
        self.dialogue = llama.generate_dialogue()

    def speak(self):
        print(f"{self.name}: {self.dialogue}")
        # Update dialogue based on player's actions or stats

class Player:
    def __init__(self):
        self.health = 100
        self.level = 1
        self.xp = 0

    def attack(self, enemy):
        damage = random.randint(10, 20)
        enemy.health -= damage
        print(f"You attacked {enemy.name} for {damage} damage!")

class Enemy:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def is_alive(self):
        return self.health > 0

def main():
    clock = pygame.time.Clock()
    player = Player()
    enemy = Enemy("Goblin", 50)
    npc = NPC()

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    player.attack(enemy)
                    if not enemy.is_alive():
                        print(f"You defeated {enemy.name}!")
                        # Increase player level and XP on defeat
                        player.level += 1
                        player.xp += 10

        screen.fill(WHITE)

        font = pygame.font.Font(None, 36)
        text = font.render(f"Player Health: {player.health}", True, BLACK)
        screen.blit(text, (10, 10))

        text = font.render(f"Enemy Health: {enemy.health}", True, BLACK)
        screen.blit(text, (10, 50))

        pygame.draw.rect(screen, (0, 255, 0), (player.x, player.y, 20, 20))
        pygame.draw.rect(screen, (255, 0, 0), (enemy.x, enemy.y, 20, 20))

        pygame.display.flip()
        clock.tick(60)

    pygame.quit()



if __name__ == "__main__":
    main()