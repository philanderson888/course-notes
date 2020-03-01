# C#

# Setup and IDE Environments

[Setup and IDE Environments](C/Setup%20and%20IDE%20Environments.md)

# Console Apps

### Hello World

[Hello World ](C/Hello%20World.md)

## c-sharp-tests

[Tests - Questions](C/Tests%20Questions.md)

[Tests - Answers](C/Tests%20Answers.md)

## Passwords, Hashing And Salting

### Salting

As part of hashing is salting which generates a random string of bytes to add to the user's password.

In .NET we use System.Security.Cryptography, or we could also use RNGCryptoServiceProvider as an alternative library.  In the example below we are just using the basic, built-in .NET cryptographic provider.

    #region using Cryptography and LINQ
    using System;
    using System.Security.Cryptography;
    using System.Linq;
    #endregion
    namespace Hash_Salt_01
    {
        class MainClass
        {
            public static void Main(string[] args)
            {
                #region Generate A New Hash And Just Read The Salt
                var salt = new Hash().Salt;
                #endregion
                #region Print Out The Salt Byte Array
                Console.WriteLine("Salt as hex");  
                Console.WriteLine(BitConverter.ToString(salt));
                Console.WriteLine("Salt as decimal bytes");
                foreach(var item in salt){
                    Console.Write(item + "   ");
                }
                #endregion
            }
        }
        #region Class Hash - Generates A Salt
        class Hash
        {
            private static readonly RandomNumberGenerator rng = RandomNumberGenerator.Create();
            public static readonly int DefaultSaltSize = 8; // 64-bit salt
            public readonly byte[] Salt;
            public readonly byte[] Passhash;
    
            public Hash()
            {
                Salt = GenerateSalt(DefaultSaltSize);
            }
    
            private static byte[] GenerateSalt(int saltSize)
            {
                // This generates salt.
                // Rephrasing Schneier:
                // "salt" is a random string of bytes that is
                // combined with password bytes before being
                // operated by the one-way function.
                byte[] salt = new byte[saltSize];
                rng.GetBytes(salt);
                return salt;
            }
        }
        #endregion
    }

### Salting Example 2 : More Advanced Example

[https://medium.com/@mehanix/lets-talk-security-salted-password-hashing-in-c-5460be5c3aae](https://medium.com/@mehanix/lets-talk-security-salted-password-hashing-in-c-5460be5c3aae) 

### Salting : PrePending Salt To The Password

Salt is 16 bytes and Hash is 20 bytes so the total is 36 bytes

var pbkdf2 = new Rfc2989DeriveBytes(passwordText,salt, 10000);

// 10000 re-hashing

### Hashing

We can use various algorithms to do the hashing.

One such one is `PBKDF2` which can be used to slow down attackers trying to brute force crack the hash.

# WPF

[WPF](C/WPF.md)

[Office](C/Office.md)

API_EF
API_Core

ASP_EF
ASP_Core

# SQL Legacy Forms Projects

[SQL Legacy Forms Projects](C/SQL%20Legacy%20Forms%20Projects.md)

[C# Not Part Of The Course](C/C%20Not%20Part%20Of%20The%20Course.md)