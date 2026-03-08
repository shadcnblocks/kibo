"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@repo/shadcn-ui/lib/utils";

import type { BundledLanguage } from "@repo/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@repo/code-block";
import { Button } from "@repo/shadcn-ui/components/ui/button";
import { ScrollArea, ScrollBar } from "@repo/shadcn-ui/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@repo/shadcn-ui/components/ui/tabs";

const code = [
  {
    language: "javascript",
    filename: "database-query.js",
    code: `// Node.js database query using Prisma ORM
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new user
const user = await prisma.user.create({
  data: {
    name: 'Jane Smith',
    email: 'jane@example.com',
    age: 28,
    profile: {
      create: {
        bio: 'Software developer passionate about clean code'
      }
    }
  }
});

console.log('Created user:', user);

// Alternative using raw SQL with mysql2
const mysql = require('mysql2/promise');
const connection = await mysql.createConnection(config);
const [rows] = await connection.execute(
  'SELECT * FROM users WHERE age > ? AND active = ?',
  [25, true]
);`,
  },
  {
    language: "python",
    filename: "database_query.py",
    code: `# Python database query using SQLAlchemy ORM
from sqlalchemy import create_engine, Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Create user
user = User(
    name='Jane Smith',
    email='jane@example.com',
    age=28,
    active=True
)
session.add(user)
session.commit()

# Query users
users = session.query(User).filter(
    User.age > 25,
    User.active == True
).all()

# Alternative using raw SQL with psycopg2
import psycopg2
conn = psycopg2.connect(database="mydb", user="user", password="pass")
cur = conn.cursor()
cur.execute("SELECT * FROM users WHERE age > %s AND active = %s", (25, True))
results = cur.fetchall()`,
  },
  {
    language: "go",
    filename: "database_query.go",
    code: `package main

import (
    "database/sql"
    "fmt"
    _ "github.com/lib/pq"
)

type User struct {
    ID     int    \`db:"id"\`
    Name   string \`db:"name"\`
    Email  string \`db:"email"\`
    Age    int    \`db:"age"\`
    Active bool   \`db:"active"\`
}

func main() {
    db, err := sql.Open("postgres", "postgres://user:pass@localhost/dbname?sslmode=disable")
    if err != nil {
        panic(err)
    }
    defer db.Close()
    
    // Insert user
    _, err = db.Exec(\`
        INSERT INTO users (name, email, age, active) 
        VALUES ($1, $2, $3, $4)\`,
        "Jane Smith", "jane@example.com", 28, true)
    
    // Query users
    rows, err := db.Query(\`
        SELECT id, name, email, age, active 
        FROM users WHERE age > $1 AND active = $2\`,
        25, true)
    defer rows.Close()
    
    for rows.Next() {
        var user User
        rows.Scan(&user.ID, &user.Name, &user.Email, &user.Age, &user.Active)
        fmt.Printf("User: %+v\\n", user)
    }
}`,
  },
  {
    language: "ruby",
    filename: "database_query.rb",
    code: `# Ruby database query using ActiveRecord ORM
class User < ApplicationRecord
  has_one :profile
  validates :email, presence: true, uniqueness: true
  scope :active_adults, -> { where('age > ? AND active = ?', 25, true) }
end

# Create user with profile
user = User.create!(
  name: 'Jane Smith',
  email: 'jane@example.com',
  age: 28,
  active: true
)

user.create_profile!(bio: 'Software developer passionate about clean code')

# Query users
active_adults = User.active_adults.includes(:profile)

# Alternative using raw SQL with ActiveRecord
users = User.find_by_sql([
  'SELECT u.*, p.bio FROM users u 
   LEFT JOIN profiles p ON u.id = p.user_id 
   WHERE u.age > ? AND u.active = ?',
  25, true
])

# Using Arel for complex queries
User.joins(:profile)
    .where(User.arel_table[:age].gt(25))
    .where(active: true)
    .select('users.*, profiles.bio')`,
  },
];

interface CodeExample1Props {
  className?: string;
}

const CodeExample1 = ({ className }: CodeExample1Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col gap-6 lg:pr-20">
            <span className="text-lg text-muted-foreground">
              ./database-setup.sh
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              YOUR DATA.
              <br />
              <span className="text-muted-foreground">YOUR QUERIES.</span>
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Connect faster and manipulate your data with database APIs and
              ORMs that are powerful but also easy to use.
            </p>
            <Button size="lg" className="w-fit">
              Get started
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex w-full flex-col gap-1 overflow-hidden">
            <Tabs defaultValue="javascript" onValueChange={setSelectedLanguage}>
              <TabsList className="h-10 w-full">
                <TabsTrigger value="javascript">Javascript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="go">Go</TabsTrigger>
                <TabsTrigger value="ruby">Ruby</TabsTrigger>
              </TabsList>
            </Tabs>
            <CodeBlock data={code} value={selectedLanguage} className="w-full">
              <CodeBlockHeader>
                <CodeBlockFiles>
                  {(item) => (
                    <CodeBlockFilename
                      key={item.language}
                      value={item.language}
                    >
                      {item.filename}
                    </CodeBlockFilename>
                  )}
                </CodeBlockFiles>
                <CodeBlockCopyButton
                  onCopy={() => console.log("Copied code to clipboard")}
                  onError={() =>
                    console.error("Failed to copy code to clipboard")
                  }
                />
              </CodeBlockHeader>
              <ScrollArea className="w-full">
                <CodeBlockBody>
                  {(item) => (
                    <CodeBlockItem
                      key={item.language}
                      value={item.language}
                      className="max-h-96 w-full"
                    >
                      <CodeBlockContent
                        language={item.language as BundledLanguage}
                      >
                        {item.code}
                      </CodeBlockContent>
                    </CodeBlockItem>
                  )}
                </CodeBlockBody>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

const Example = () => <CodeExample1 />;

export default Example;
